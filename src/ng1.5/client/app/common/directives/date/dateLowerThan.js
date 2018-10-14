'use strict';

module.exports = /*@ngInject*/ function dateLowerThan() {
    return {
        restrict: 'A',
        require: ['ngModel', '^form'],
        link: function (scope, element, attrs, controllers) {
            var ngModelCtrl = controllers[0],
                formCtrl = controllers[1];

            var dateToValue = '';
            scope.$watch(attrs.dateLowerThan, function(dateString) {
                dateToValue = dateString;
                ngModelCtrl.$validate();
            });

            //trigger manual validation (on submit validate also multi-fields validators)
            scope.$on('update-multi-field-validators', function () {
                ngModelCtrl.$validate();
            });

            function isEmpty(value) {
                return value === '' || value === null;
            }

            ngModelCtrl.$validators.dateLowerThan = function (model, dateFromValue) {
                // we don't care about validation for not submitted form and empty values
                if (!formCtrl.$submitted || isEmpty(dateFromValue) || isEmpty(dateToValue)) return true;
                return dateFromValue <= dateToValue;
            };
        }
    }
};