import template from './tasksPrivate.html';
import controller from './tasksPrivate.controller';
import './tasksPrivate.less';

let tasksPrivateComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default tasksPrivateComponent;
