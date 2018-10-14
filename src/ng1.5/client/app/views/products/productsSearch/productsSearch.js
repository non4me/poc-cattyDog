import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsSearchComponent from './productsSearch.component';

let productsSearchModule = angular.module('productsSearch', [
  uiRouter
])

.component('productsSearch', productsSearchComponent);

export default productsSearchModule;
