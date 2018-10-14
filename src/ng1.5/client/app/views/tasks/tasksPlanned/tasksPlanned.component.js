import template from './tasksPlanned.html';
import controller from './tasksPlanned.controller';
import './tasksPlanned.less';

let tasksPlannedComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default tasksPlannedComponent;
