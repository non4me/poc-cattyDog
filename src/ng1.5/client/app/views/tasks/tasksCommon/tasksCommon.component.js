import template from './tasksCommon.html';
import controller from './tasksCommon.controller';
import './tasksCommon.less';

let tasksCommonComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default tasksCommonComponent;
