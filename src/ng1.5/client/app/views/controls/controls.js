import angular from 'angular';
import uiRouter from 'angular-ui-router';

import controlsDetail from './controlsDetail/controlsDetail'
import controlsSearch from './controlsSearch/controlsSearch'

let controlsModule = angular.module('controls', [
  uiRouter,
  controlsDetail.name,
  controlsSearch.name
]);

export default controlsModule;
