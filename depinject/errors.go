package depinject

import (
	"fmt"
	"reflect"

	"github.com/pkg/errors"
)

// ErrMultipleImplicitInterfaceBindings defines an error condition where an attempt was made to implicitly bind
// Interface to a concrete type, but the container was unable to come to a resolution because multiple Matches
// were found.
type ErrMultipleImplicitInterfaceBindings struct {
	error
	Interface reflect.Type
	Matches   []reflect.Type
}

func (err ErrMultipleImplicitInterfaceBindings) Error() string {
	return fmt.Sprintf("Multiple implementations found for interface %v: %v", err.Interface, err.Matches)
}

// ErrNoTypeForExplicitBindingFound defines an error condition where an explicit binding of Interface type was marked as a
// Preference but no provider for the requested type implementation was found in the container.
type ErrNoTypeForExplicitBindingFound struct {
	PreferredType      string
	PreferredInterface string
	ModuleName         string
	Interface          reflect.Type
	error
}

func NewErrNoTypeForExplicitBindingFound(p preference) ErrNoTypeForExplicitBindingFound {
	var moduleName string
	if p.moduleKey != nil {
		moduleName = p.moduleKey.name
	}

	return ErrNoTypeForExplicitBindingFound{
		PreferredType:      p.implTypeName,
		PreferredInterface: p.interfaceName,
		ModuleName:         moduleName,
	}
}

func (err ErrNoTypeForExplicitBindingFound) Error() string {
	if err.ModuleName != "" {
		return fmt.Sprintf("Given the explicit interface binding %s in module %s, a provider of type %s was not found.",
			err.PreferredInterface, err.ModuleName, err.PreferredType)
	} else {
		return fmt.Sprintf("Given the explicit interface binding %s, a provider of type %s was not found.",
			err.PreferredInterface, err.PreferredType)
	}

}

func duplicateDefinitionError(typ reflect.Type, duplicateLoc Location, existingLoc string) error {
	return errors.Errorf("duplicate provision of type %v by %s\n\talready provided by %s",
		typ, duplicateLoc, existingLoc)
}
