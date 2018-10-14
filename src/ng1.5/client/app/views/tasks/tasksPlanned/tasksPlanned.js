import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tasksPlannedComponent from './tasksPlanned.component';

let tasksPlannedModule = angular.module('tasksPlanned', [
  uiRouter
])

.component('tasksPlanned', tasksPlannedComponent);

export default tasksPlannedModule;
