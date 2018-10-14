'use strict';

module.exports = /*@ngInject*/ function requiredAny() {
    return {
        restrict: 'A',
        require: ['ngModel', '^form'],
        link: function link(scope, elem, attrs, controllers) {
            var ngModelCtrl = controllers[0],
                formCtrl = controllers[1];

            // Register all groups to scope
            if (!scope.__requiredAnyGroups) {
                scope.__requiredAnyGroups = {}
            }
            var groups = scope.__requiredAnyGroups;

            // Create a bucket for this group if one does not yet exist
            if (!groups[attrs.requiredAny]) {
                groups[attrs.requiredAny] = {};
            }
            var group = groups[attrs.requiredAny];

            // Create the entry for this control
            group[attrs.ngModel] = {
                ctrl: ngModelCtrl,
                hasValue: false
            };

            //trigger manual validation (on submit validate also multi-fields validators)
            scope.$on('update-multi-field-validators', function () {
                ngModelCtrl.$validate();
            });

            ngModelCtrl.$validators.requiredAny = function (view, value) {
                if (!formCtrl.$submitted) return true;
                var thisCtrl = group[attrs.ngModel],
                    ctrlValue = (typeof value !== 'undefined' || value !== '') && value,
                    oneHasValue = false;
                thisCtrl.hasValue = ctrlValue;

                // First determine if any field in the group has a value
                for (var prop in group) {
                    if (group.hasOwnProperty(prop) && group[prop].hasValue) {
                        oneHasValue = true;
                        break;
                    }
                }

                // Set the validity of all other fields based on whether the group has a value
                for (var prop in group) {
                    if (group.hasOwnProperty(prop) && thisCtrl != group[prop]) {
                        group[prop].ctrl.$setValidity('requiredAny', oneHasValue);
                    }
                }

                // Return the validity of this field
                return oneHasValue;
            };
        }
    }
};
