import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tableFilterComponent from './tableFilter.component';

let tableFilterModule = angular.module('tableFilter', [
  uiRouter
])

.component('tableFilter', tableFilterComponent);

export default tableFilterModule;
