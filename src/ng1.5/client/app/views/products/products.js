import angular from 'angular';
import uiRouter from 'angular-ui-router';

import productsSearch from './productsSearch/productsSearch'

let productsModule = angular.module('products', [
  uiRouter,
  productsSearch.name
]);

export default productsModule;
