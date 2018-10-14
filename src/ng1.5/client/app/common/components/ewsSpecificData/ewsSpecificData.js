import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ewsSpecificDataComponent from './ewsSpecificData.component';

let ewsSpecificDataModule = angular.module('ewsSpecificData', [
  uiRouter
])

.component('ewsSpecificData', ewsSpecificDataComponent);

export default ewsSpecificDataModule;
