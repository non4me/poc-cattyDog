import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signalDetailsComponent from './signalDetails.component';

let signalDetailsModule = angular.module('signalDetails', [
  uiRouter
])

.component('signalDetails', signalDetailsComponent);

export default signalDetailsModule;
