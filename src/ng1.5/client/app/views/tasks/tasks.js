import angular from 'angular';

import tasksComponent from './tasks.component';
import tasksPrivate from './tasksPrivate/tasksPrivate';
import tasksCommon from './tasksCommon/tasksCommon';
import tasksPlanned from './tasksPlanned/tasksPlanned';

let tasksModule = angular.module('tasks', [
    tasksPrivate.name,
    tasksCommon.name,
    tasksPlanned.name
  ])

  .component('tasks', tasksComponent);

export default tasksModule;
