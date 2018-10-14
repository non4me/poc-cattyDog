import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientControlsComponent from './clientControls.component';

let clientControlsModule = angular.module('clientControls', [
  uiRouter
])

.component('clientControls', clientControlsComponent);

export default clientControlsModule;
