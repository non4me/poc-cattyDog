import template from './clientSearch.html';
import controller from './clientSearch.controller';
import './clientSearch.less';

let clientSearchComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default clientSearchComponent;
