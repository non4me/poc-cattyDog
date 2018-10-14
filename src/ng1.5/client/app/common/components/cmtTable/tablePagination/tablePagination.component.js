import template from './tablePagination.html';
import controller from './tablePagination.controller';
import './tablePagination.less';

let tablePaginationComponent = {
  restrict: 'E',
  bindings: {
    rawDataIn: '<',
    sort: '<',
    tableDataOut: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default tablePaginationComponent;
