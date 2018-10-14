import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientEssoGroupComponent from './clientEssoGroup.component';

let clientEssoGroupModule = angular.module('clientEssoGroup', [
  uiRouter
])

.component('clientEssoGroup', clientEssoGroupComponent);

export default clientEssoGroupModule;
