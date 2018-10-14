import template from './cmtTable.html';
import controller from './cmtTable.controller';
import './cmtTable.less';

let cmtTableComponent = {
  restrict: 'E',
  bindings: {
    tableHeader: '<',
    hideFilter: '@',
    hidePagination: '@',
    template: '@',
    tableClass: '@',
    headerType: '@',
    defaultSort: '@',
    tableEmpty: '@',
    data: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default cmtTableComponent;
