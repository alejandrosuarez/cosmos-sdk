(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{804:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"state-transitions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state-transitions"}},[e._v("#")]),e._v(" State Transitions")]),e._v(" "),o("p",[e._v("This document describes the state transition operations pertaining to:")]),e._v(" "),o("ol",[o("li",[o("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html#validators"}},[e._v("Validators")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html#delegations"}},[e._v("Delegations")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html#slashing"}},[e._v("Slashing")])],1)]),e._v(" "),o("h2",{attrs:{id:"validators"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validators"}},[e._v("#")]),e._v(" Validators")]),e._v(" "),o("p",[e._v("State transitions in validators are performed on every "),o("RouterLink",{attrs:{to:"/modules/staking/05_end_block.html#validator-set-changes"}},[o("code",[e._v("EndBlock")])]),e._v("\nin order to check for changes in the active "),o("code",[e._v("ValidatorSet")]),e._v(".")],1),e._v(" "),o("p",[e._v("A validator can be "),o("code",[e._v("Unbonded")]),e._v(", "),o("code",[e._v("Unbonding")]),e._v(" or "),o("code",[e._v("Bonded")]),e._v(". "),o("code",[e._v("Unbonded")]),e._v("\nand "),o("code",[e._v("Unbonding")]),e._v(" are collectively called "),o("code",[e._v("Not Bonded")]),e._v(". A validator can move\ndirectly between all the states, except for from "),o("code",[e._v("Bonded")]),e._v(" to "),o("code",[e._v("Unbonded")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"not-bonded-to-bonded"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#not-bonded-to-bonded"}},[e._v("#")]),e._v(" Not bonded to Bonded")]),e._v(" "),o("p",[e._v("The following transition occurs when a validator's ranking in the "),o("code",[e._v("ValidatorPowerIndex")]),e._v(" surpasses\nthat of the "),o("code",[e._v("LastValidator")]),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("set "),o("code",[e._v("validator.Status")]),e._v(" to "),o("code",[e._v("Bonded")])]),e._v(" "),o("li",[e._v("send the "),o("code",[e._v("validator.Tokens")]),e._v(" from the "),o("code",[e._v("NotBondedTokens")]),e._v(" to the "),o("code",[e._v("BondedPool")]),e._v(" "),o("code",[e._v("ModuleAccount")])]),e._v(" "),o("li",[e._v("delete the existing record from "),o("code",[e._v("ValidatorByPowerIndex")])]),e._v(" "),o("li",[e._v("add a new updated record to the "),o("code",[e._v("ValidatorByPowerIndex")])]),e._v(" "),o("li",[e._v("update the "),o("code",[e._v("Validator")]),e._v(" object for this validator")]),e._v(" "),o("li",[e._v("if it exists, delete any "),o("code",[e._v("ValidatorQueue")]),e._v(" record for this validator")])]),e._v(" "),o("h3",{attrs:{id:"bonded-to-unbonding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bonded-to-unbonding"}},[e._v("#")]),e._v(" Bonded to Unbonding")]),e._v(" "),o("p",[e._v("When a validator begins the unbonding process the following operations occur:")]),e._v(" "),o("ul",[o("li",[e._v("send the "),o("code",[e._v("validator.Tokens")]),e._v(" from the "),o("code",[e._v("BondedPool")]),e._v(" to the "),o("code",[e._v("NotBondedTokens")]),e._v(" "),o("code",[e._v("ModuleAccount")])]),e._v(" "),o("li",[e._v("set "),o("code",[e._v("validator.Status")]),e._v(" to "),o("code",[e._v("Unbonding")])]),e._v(" "),o("li",[e._v("delete the existing record from "),o("code",[e._v("ValidatorByPowerIndex")])]),e._v(" "),o("li",[e._v("add a new updated record to the "),o("code",[e._v("ValidatorByPowerIndex")])]),e._v(" "),o("li",[e._v("update the "),o("code",[e._v("Validator")]),e._v(" object for this validator")]),e._v(" "),o("li",[e._v("insert a new record into the "),o("code",[e._v("ValidatorQueue")]),e._v(" for this validator")])]),e._v(" "),o("h3",{attrs:{id:"unbonding-to-unbonded"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unbonding-to-unbonded"}},[e._v("#")]),e._v(" Unbonding to Unbonded")]),e._v(" "),o("p",[e._v("A validator moves from unbonding to unbonded when the "),o("code",[e._v("ValidatorQueue")]),e._v(" object\nmoves from bonded to unbonded")]),e._v(" "),o("ul",[o("li",[e._v("update the "),o("code",[e._v("Validator")]),e._v(" object for this validator")]),e._v(" "),o("li",[e._v("set "),o("code",[e._v("validator.Status")]),e._v(" to "),o("code",[e._v("Unbonded")])])]),e._v(" "),o("h3",{attrs:{id:"jail-unjail"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jail-unjail"}},[e._v("#")]),e._v(" Jail/Unjail")]),e._v(" "),o("p",[e._v("when a validator is jailed it is effectively removed from the Tendermint set.\nthis process may be also be reversed. the following operations occur:")]),e._v(" "),o("ul",[o("li",[e._v("set "),o("code",[e._v("Validator.Jailed")]),e._v(" and update object")]),e._v(" "),o("li",[e._v("if jailed delete record from "),o("code",[e._v("ValidatorByPowerIndex")])]),e._v(" "),o("li",[e._v("if unjailed add record to "),o("code",[e._v("ValidatorByPowerIndex")])])]),e._v(" "),o("p",[e._v("Jailed validators are not present in any of the following stores:")]),e._v(" "),o("ul",[o("li",[e._v("the power store (from consensus power to address)")])]),e._v(" "),o("h2",{attrs:{id:"delegations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delegations"}},[e._v("#")]),e._v(" Delegations")]),e._v(" "),o("h3",{attrs:{id:"delegate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delegate"}},[e._v("#")]),e._v(" Delegate")]),e._v(" "),o("p",[e._v("When a delegation occurs both the validator and the delegation objects are affected")]),e._v(" "),o("ul",[o("li",[e._v("determine the delegators shares based on tokens delegated and the validator's exchange rate")]),e._v(" "),o("li",[e._v("remove tokens from the sending account")]),e._v(" "),o("li",[e._v("add shares the delegation object or add them to a created validator object")]),e._v(" "),o("li",[e._v("add new delegator shares and update the "),o("code",[e._v("Validator")]),e._v(" object")]),e._v(" "),o("li",[e._v("transfer the "),o("code",[e._v("delegation.Amount")]),e._v(" from the delegator's account to the "),o("code",[e._v("BondedPool")]),e._v(" or the "),o("code",[e._v("NotBondedPool")]),e._v(" "),o("code",[e._v("ModuleAccount")]),e._v(" depending if the "),o("code",[e._v("validator.Status")]),e._v(" is "),o("code",[e._v("Bonded")]),e._v(" or not")]),e._v(" "),o("li",[e._v("delete the existing record from "),o("code",[e._v("ValidatorByPowerIndex")])]),e._v(" "),o("li",[e._v("add an new updated record to the "),o("code",[e._v("ValidatorByPowerIndex")])])]),e._v(" "),o("h3",{attrs:{id:"begin-unbonding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#begin-unbonding"}},[e._v("#")]),e._v(" Begin Unbonding")]),e._v(" "),o("p",[e._v("As a part of the Undelegate and Complete Unbonding state transitions Unbond\nDelegation may be called.")]),e._v(" "),o("ul",[o("li",[e._v("subtract the unbonded shares from delegator")]),e._v(" "),o("li",[e._v("if the validator is "),o("code",[e._v("Unbonding")]),e._v(" or "),o("code",[e._v("Bonded")]),e._v(" add the tokens to an "),o("code",[e._v("UnbondingDelegation")]),e._v(" Entry")]),e._v(" "),o("li",[e._v("if the validator is "),o("code",[e._v("Unbonded")]),e._v(" send the tokens directly to the withdraw\naccount")]),e._v(" "),o("li",[e._v("update the delegation or remove the delegation if there are no more shares")]),e._v(" "),o("li",[e._v("if the delegation is the operator of the validator and no more shares exist then trigger a jail validator")]),e._v(" "),o("li",[e._v("update the validator with removed the delegator shares and associated coins")]),e._v(" "),o("li",[e._v("if the validator state is "),o("code",[e._v("Bonded")]),e._v(", transfer the "),o("code",[e._v("Coins")]),e._v(" worth of the unbonded\nshares from the "),o("code",[e._v("BondedPool")]),e._v(" to the "),o("code",[e._v("NotBondedPool")]),e._v(" "),o("code",[e._v("ModuleAccount")])]),e._v(" "),o("li",[e._v("remove the validator if it is unbonded and there are no more delegation shares.")])]),e._v(" "),o("h3",{attrs:{id:"complete-unbonding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#complete-unbonding"}},[e._v("#")]),e._v(" Complete Unbonding")]),e._v(" "),o("p",[e._v("For undelegations which do not complete immediately, the following operations\noccur when the unbonding delegation queue element matures:")]),e._v(" "),o("ul",[o("li",[e._v("remove the entry from the "),o("code",[e._v("UnbondingDelegation")]),e._v(" object")]),e._v(" "),o("li",[e._v("transfer the tokens from the "),o("code",[e._v("NotBondedPool")]),e._v(" "),o("code",[e._v("ModuleAccount")]),e._v(" to the delegator "),o("code",[e._v("Account")])])]),e._v(" "),o("h3",{attrs:{id:"begin-redelegation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#begin-redelegation"}},[e._v("#")]),e._v(" Begin Redelegation")]),e._v(" "),o("p",[e._v("Redelegations affect the delegation, source and destination validators.")]),e._v(" "),o("ul",[o("li",[e._v("perform an "),o("code",[e._v("unbond")]),e._v(" delegation from the source validator to retrieve the tokens worth of the unbonded shares")]),e._v(" "),o("li",[e._v("using the unbonded tokens, "),o("code",[e._v("Delegate")]),e._v(" them to the destination validator")]),e._v(" "),o("li",[e._v("if the "),o("code",[e._v("sourceValidator.Status")]),e._v(" is "),o("code",[e._v("Bonded")]),e._v(", and the "),o("code",[e._v("destinationValidator")]),e._v(" is not,\ntransfer the newly delegated tokens from the "),o("code",[e._v("BondedPool")]),e._v(" to the "),o("code",[e._v("NotBondedPool")]),e._v(" "),o("code",[e._v("ModuleAccount")])]),e._v(" "),o("li",[e._v("otherwise, if the "),o("code",[e._v("sourceValidator.Status")]),e._v(" is not "),o("code",[e._v("Bonded")]),e._v(", and the "),o("code",[e._v("destinationValidator")]),e._v("\nis "),o("code",[e._v("Bonded")]),e._v(", transfer the newly delegated tokens from the "),o("code",[e._v("NotBondedPool")]),e._v(" to the "),o("code",[e._v("BondedPool")]),e._v(" "),o("code",[e._v("ModuleAccount")])]),e._v(" "),o("li",[e._v("record the token amount in an new entry in the relevant "),o("code",[e._v("Redelegation")])])]),e._v(" "),o("p",[e._v('From when a redelegation begins until it completes, the delegator is in a state of "pseudo-unbonding", and can still be\nslashed for infractions that occured before the redelegation began.')]),e._v(" "),o("h3",{attrs:{id:"complete-redelegation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#complete-redelegation"}},[e._v("#")]),e._v(" Complete Redelegation")]),e._v(" "),o("p",[e._v("When a redelegations complete the following occurs:")]),e._v(" "),o("ul",[o("li",[e._v("remove the entry from the "),o("code",[e._v("Redelegation")]),e._v(" object")])]),e._v(" "),o("h2",{attrs:{id:"slashing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[e._v("#")]),e._v(" Slashing")]),e._v(" "),o("h3",{attrs:{id:"slash-validator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slash-validator"}},[e._v("#")]),e._v(" Slash Validator")]),e._v(" "),o("p",[e._v("When a Validator is slashed, the following occurs:")]),e._v(" "),o("ul",[o("li",[e._v("The total "),o("code",[e._v("slashAmount")]),e._v(" is calculated as the "),o("code",[e._v("slashFactor")]),e._v(" (a chain parameter) * "),o("code",[e._v("TokensFromConsensusPower")]),e._v(",\nthe total number of tokens bonded to the validator at the time of the infraction.")]),e._v(" "),o("li",[e._v("Every unbonding delegation and pseudo-unbonding redelegation such that the infraction occured before the unbonding or\nredelegation began from the validator are slashed by the "),o("code",[e._v("slashFactor")]),e._v(" percentage of the initialBalance.")]),e._v(" "),o("li",[e._v("Each amount slashed from redelegations and unbonding delegations is subtracted from the\ntotal slash amount.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("remaingSlashAmount")]),e._v(" is then slashed from the validator's tokens in the "),o("code",[e._v("BondedPool")]),e._v(" or\n"),o("code",[e._v("NonBondedPool")]),e._v(" depending on the validator's status. This reduces the total supply of tokens.")])]),e._v(" "),o("p",[e._v("In the case of a slash due to any infraction that requires evidence to submitted (for example double-sign), the slash\noccurs at the block where the evidence is included, not at the block where the infraction occured.\nPut otherwise, validators are not slashed retroactively, only when they are caught.")]),e._v(" "),o("h3",{attrs:{id:"slash-unbonding-delegation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slash-unbonding-delegation"}},[e._v("#")]),e._v(" Slash Unbonding Delegation")]),e._v(" "),o("p",[e._v("When a validator is slashed, so are those unbonding delegations from the validator that began unbonding\nafter the time of the infraction. Every entry in every unbonding delegation from the validator\nis slashed by "),o("code",[e._v("slashFactor")]),e._v(". The amount slashed is calculated from the "),o("code",[e._v("InitialBalance")]),e._v(" of the\ndelegation and is capped to prevent a resulting negative balance. Completed (or mature) unbondings are not slashed.")]),e._v(" "),o("h3",{attrs:{id:"slash-redelegation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slash-redelegation"}},[e._v("#")]),e._v(" Slash Redelegation")]),e._v(" "),o("p",[e._v("When a validator is slashed, so are all redelegations from the validator that began after the\ninfraction. Redelegations are slashed by "),o("code",[e._v("slashFactor")]),e._v(".\nRedelegations that began before the infraction are not slashed.\nThe amount slashed is calculated from the "),o("code",[e._v("InitialBalance")]),e._v(" of the delegation and is capped to\nprevent a resulting negative balance.\nMature redelegations (that have completed pseudo-unbonding) are not slashed.")]),e._v(" "),o("h2",{attrs:{id:"how-shares-are-calculated"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-shares-are-calculated"}},[e._v("#")]),e._v(" How Shares are calculated")]),e._v(" "),o("p",[e._v("At any given point in time, each validator has a number of tokens, "),o("code",[e._v("T")]),e._v(", and has a number of shares issued, "),o("code",[e._v("S")]),e._v(".\nEach delegator, "),o("code",[e._v("i")]),e._v(", holds a number of shares, "),o("code",[e._v("S_i")]),e._v(".\nThe number of tokens is the sum of all tokens delegated to the validator, plus the rewards, minus the slashes.")]),e._v(" "),o("p",[e._v("The delegator is entitled to a portion of the underlying tokens proportional to their proportion of shares.\nSo delegator "),o("code",[e._v("i")]),e._v(" is entitled to "),o("code",[e._v("T * S_i / S")]),e._v(" of the validator's tokens.")]),e._v(" "),o("p",[e._v("When a delegator delegates new tokens to the validator, they receive a number of shares proportional to their contribution.\nSo when delegator "),o("code",[e._v("j")]),e._v(" delegates "),o("code",[e._v("T_j")]),e._v(" tokens, they receive "),o("code",[e._v("S_j = S * T_j / T")]),e._v(" shares.\nThe total number of tokens is now "),o("code",[e._v("T + T_j")]),e._v(", and the total number of shares is "),o("code",[e._v("S + S_j")]),e._v(".\n"),o("code",[e._v("j")]),e._v("s proportion of the shares is the same as their proportion of the total tokens contributed: "),o("code",[e._v("(S + S_j) / S = (T + T_j) / T")]),e._v(".")]),e._v(" "),o("p",[e._v("A special case is the initial delegation, when "),o("code",[e._v("T = 0")]),e._v(" and "),o("code",[e._v("S = 0")]),e._v(", so "),o("code",[e._v("T_j / T")]),e._v(" is undefined.\nFor the initial delegation, delegator "),o("code",[e._v("j")]),e._v(" who delegates "),o("code",[e._v("T_j")]),e._v(" tokens receive "),o("code",[e._v("S_j = T_j")]),e._v(" shares.\nSo a validator that hasn't received any rewards and has not been slashed will have "),o("code",[e._v("T = S")]),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);