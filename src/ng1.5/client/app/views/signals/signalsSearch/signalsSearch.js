import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signalsSearchComponent from './signalsSearch.component';

let signalsSearchModule = angular.module('signalsSearch', [
  uiRouter
])

.component('signalsSearch', signalsSearchComponent);

export default signalsSearchModule;
