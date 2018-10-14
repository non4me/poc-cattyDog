import template from './tasks.html';
import controller from './tasks.controller';
import './tasks.less';

let tasksComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default tasksComponent;
