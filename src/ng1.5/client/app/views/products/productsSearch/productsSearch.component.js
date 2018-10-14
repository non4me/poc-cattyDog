import template from './productsSearch.html';
import controller from './productsSearch.controller';
import './productsSearch.less';

let productsSearchComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default productsSearchComponent;
