import template from './clientProducts.html';
import controller from './clientProducts.controller';
import './clientProducts.less';

let clientProductsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default clientProductsComponent;
