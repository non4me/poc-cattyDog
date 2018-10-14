import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientOverviewComponent from './clientOverview.component';

let clientOverviewModule = angular.module('clientOverview', [
  uiRouter
])

.component('clientOverview', clientOverviewComponent);

export default clientOverviewModule;
