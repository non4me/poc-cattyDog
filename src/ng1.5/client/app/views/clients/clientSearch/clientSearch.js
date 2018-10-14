import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientSearchComponent from './clientSearch.component';

let clientSearchModule = angular.module('clientSearch', [
  uiRouter
])

.component('clientSearch', clientSearchComponent);

export default clientSearchModule;
