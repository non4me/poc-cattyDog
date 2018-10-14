import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ewsFormControlComponent from './ewsFormControl.component';

let ewsFormControlModule = angular.module('ewsFormControl', [
  uiRouter
])

.component('ewsFormControl', ewsFormControlComponent);

export default ewsFormControlModule;
