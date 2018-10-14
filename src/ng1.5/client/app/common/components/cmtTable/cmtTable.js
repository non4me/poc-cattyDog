import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cmtTableComponent from './cmtTable.component';

import filter from './tableFilter/tableFilter';
import dataPresenter from './tableDataPresenter/tableDataPresenter';
import pagination from './tablePagination/tablePagination';

let cmtTableModule = angular.module('cmtTable', [
    uiRouter,
    filter.name,
    dataPresenter.name,
    pagination.name
  ])
  .component('cmtTable', cmtTableComponent);

export default cmtTableModule;
