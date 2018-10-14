import template from './client.html';
import controller from './client.controller';
import './client.less';

let clientComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default clientComponent;
