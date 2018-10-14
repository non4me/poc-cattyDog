import template from './ewsSpecificData.html';
import controller from './ewsSpecificData.controller';
import './ewsSpecificData.less';

let ewsSpecificDataComponent = {
  restrict: 'E',
  bindings: {
    template: '<type',
    formControlMode: '@',
    model: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ewsSpecificDataComponent;
