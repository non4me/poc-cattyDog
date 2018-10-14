import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controlsDetailComponent from './controlsDetail.component';

let controlsDetailModule = angular.module('controlsDetail', [
  uiRouter
])

.component('controlsDetail', controlsDetailComponent);

export default controlsDetailModule;
