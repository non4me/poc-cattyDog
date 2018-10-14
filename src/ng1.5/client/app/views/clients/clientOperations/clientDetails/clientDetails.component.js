import template from './clientDetails.html';
import controller from './clientDetails.controller';
import './clientDetails.less';

let clientDetailsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default clientDetailsComponent;
