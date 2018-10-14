import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tasksCommonComponent from './tasksCommon.component';

let tasksCommonModule = angular.module('tasksCommon', [
  uiRouter
])

.component('tasksCommon', tasksCommonComponent);

export default tasksCommonModule;
