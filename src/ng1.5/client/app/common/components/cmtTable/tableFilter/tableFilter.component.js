import template from './tableFilter.html';
import controller from './tableFilter.controller';
import './tableFilter.less';

let tableFilterComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default tableFilterComponent;
