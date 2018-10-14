import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientDetailsComponent from './clientDetails.component';

let clientDetailsModule = angular.module('clientDetails', [
  uiRouter
])

.component('clientDetails', clientDetailsComponent);

export default clientDetailsModule;
