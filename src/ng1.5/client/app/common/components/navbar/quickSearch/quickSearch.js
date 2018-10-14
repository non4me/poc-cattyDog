import angular from 'angular';
import uiRouter from 'angular-ui-router';
import quickSearchComponent from './quickSearch.component';

let quickSearchModule = angular.module('quickSearch', [
  uiRouter
])

.component('quickSearch', quickSearchComponent);

export default quickSearchModule;
