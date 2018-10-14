import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientProductsComponent from './clientProducts.component';

let clientProductsModule = angular.module('clientProducts', [
  uiRouter
])

.component('clientProducts', clientProductsComponent);

export default clientProductsModule;
