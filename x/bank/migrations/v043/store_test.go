package v043_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/depinject"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/testutil"
	"github.com/cosmos/cosmos-sdk/testutil/testdata"
	sdk "github.com/cosmos/cosmos-sdk/types"
	v042bank "github.com/cosmos/cosmos-sdk/x/bank/migrations/v042"
	v043bank "github.com/cosmos/cosmos-sdk/x/bank/migrations/v043"
	banktestutil "github.com/cosmos/cosmos-sdk/x/bank/testutil"
	"github.com/cosmos/cosmos-sdk/x/bank/types"
)

func TestSupplyMigration(t *testing.T) {
	var cdc codec.Codec
	depinject.Inject(banktestutil.AppConfig, &cdc)
	bankKey := sdk.NewKVStoreKey("bank")
	ctx := testutil.DefaultContext(bankKey, sdk.NewTransientStoreKey("transient_test"))
	store := ctx.KVStore(bankKey)

	oldFooCoin := sdk.NewCoin("foo", sdk.NewInt(100))
	oldBarCoin := sdk.NewCoin("bar", sdk.NewInt(200))
	oldFooBarCoin := sdk.NewCoin("foobar", sdk.NewInt(0)) // to ensure the zero denom coins pruned.

	// Old supply was stored as a single blob under the `SupplyKey`.
	var oldSupply v042bank.SupplyI
	oldSupply = &types.Supply{Total: sdk.Coins{oldFooCoin, oldBarCoin, oldFooBarCoin}}
	oldSupplyBz, err := cdc.MarshalInterface(oldSupply)
	require.NoError(t, err)
	store.Set(v042bank.SupplyKey, oldSupplyBz)

	// Run migration.
	err = v043bank.MigrateStore(ctx, bankKey, cdc)
	require.NoError(t, err)

	// New supply is indexed by denom.
	supplyStore := prefix.NewStore(store, types.SupplyKey)
	bz := supplyStore.Get([]byte("foo"))
	var amount sdk.Int
	err = amount.Unmarshal(bz)
	require.NoError(t, err)

	newFooCoin := sdk.Coin{
		Denom:  "foo",
		Amount: amount,
	}
	require.Equal(t, oldFooCoin, newFooCoin)

	bz = supplyStore.Get([]byte("bar"))
	err = amount.Unmarshal(bz)
	require.NoError(t, err)

	newBarCoin := sdk.Coin{
		Denom:  "bar",
		Amount: amount,
	}
	require.Equal(t, oldBarCoin, newBarCoin)

	// foobar shouldn't be existed in the store.
	bz = supplyStore.Get([]byte("foobar"))
	require.Nil(t, bz)
}

func TestBalanceKeysMigration(t *testing.T) {
	var cdc codec.Codec
	depinject.Inject(banktestutil.AppConfig, &cdc)
	bankKey := sdk.NewKVStoreKey("bank")
	ctx := testutil.DefaultContext(bankKey, sdk.NewTransientStoreKey("transient_test"))
	store := ctx.KVStore(bankKey)

	_, _, addr := testdata.KeyTestPubAddr()

	// set 10 foo coin
	fooCoin := sdk.NewCoin("foo", sdk.NewInt(10))
	oldFooKey := append(append(v042bank.BalancesPrefix, addr...), []byte(fooCoin.Denom)...)
	fooBz, err := cdc.Marshal(&fooCoin)
	require.NoError(t, err)
	store.Set(oldFooKey, fooBz)

	// set 0 foobar coin
	fooBarCoin := sdk.NewCoin("foobar", sdk.NewInt(0))
	oldKeyFooBar := append(append(v042bank.BalancesPrefix, addr...), []byte(fooBarCoin.Denom)...)
	fooBarBz, err := cdc.Marshal(&fooBarCoin)
	require.NoError(t, err)
	store.Set(oldKeyFooBar, fooBarBz)
	require.NotNil(t, store.Get(oldKeyFooBar)) // before store migation zero values can also exist in store.

	err = v043bank.MigrateStore(ctx, bankKey, cdc)
	require.NoError(t, err)

	newKey := append(types.CreateAccountBalancesPrefix(addr), []byte(fooCoin.Denom)...)
	// -7 because we replaced "balances" with 0x02,
	// +1 because we added length-prefix to address.
	require.Equal(t, len(oldFooKey)-7+1, len(newKey))
	require.Nil(t, store.Get(oldFooKey))
	require.Equal(t, fooBz, store.Get(newKey))

	newKeyFooBar := append(types.CreateAccountBalancesPrefix(addr), []byte(fooBarCoin.Denom)...)
	require.Nil(t, store.Get(newKeyFooBar)) // after migration zero balances pruned from store.
}
