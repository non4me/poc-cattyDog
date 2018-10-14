import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controlsSearchComponent from './controlsSearch.component';

let controlsSearchModule = angular.module('controlsSearch', [
  uiRouter
])

.component('controlsSearch', controlsSearchComponent);

export default controlsSearchModule;
