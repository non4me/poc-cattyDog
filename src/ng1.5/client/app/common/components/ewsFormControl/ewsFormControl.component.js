import template from './ewsFormControl.html';
import controller from './ewsFormControl.controller';
import './ewsFormControl.less';

let ewsFormControlComponent = {
  restrict: 'E',
  bindings: {
    type: '@',
    source: '=ngModel',
    name: '@',
    mode: "=",
    options: '=',
    filterBy: '=',
    required: '=require',
    minDate: '=',
    maxDate: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ewsFormControlComponent;
