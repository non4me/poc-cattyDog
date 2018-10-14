import template from './quickSearch.html';
import controller from './quickSearch.controller';
import './quickSearch.less';

let quickSearchComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default quickSearchComponent;
