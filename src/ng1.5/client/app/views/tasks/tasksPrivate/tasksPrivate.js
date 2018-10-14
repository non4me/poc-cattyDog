import angular from 'angular';
import tasksPrivateComponent from './tasksPrivate.component';

let tasksPrivateModule = angular.module('tasksPrivate', [])

  .component('tasksPrivate', tasksPrivateComponent);

export default tasksPrivateModule;
