import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientAddSignalComponent from './clientAddSignal.component';

let clientAddSignalModule = angular.module('clientAddSignal', [
  uiRouter
])

.component('clientAddSignal', clientAddSignalComponent);

export default clientAddSignalModule;
