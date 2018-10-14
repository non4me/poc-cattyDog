import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientHistoryComponent from './clientHistory.component';

let clientHistoryModule = angular.module('clientHistory', [
  uiRouter
])

.component('clientHistory', clientHistoryComponent);

export default clientHistoryModule;
