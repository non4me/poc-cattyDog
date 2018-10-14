import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientSignalsComponent from './clientSignals.component';

let clientSignalsModule = angular.module('clientSignals', [
  uiRouter
])

.component('clientSignals', clientSignalsComponent);

export default clientSignalsModule;
