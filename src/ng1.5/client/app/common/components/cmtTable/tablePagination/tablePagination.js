import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tablePaginationComponent from './tablePagination.component';

let tablePaginationModule = angular.module('tablePagination', [
  uiRouter
])
.component('tablePagination', tablePaginationComponent);

export default tablePaginationModule;
