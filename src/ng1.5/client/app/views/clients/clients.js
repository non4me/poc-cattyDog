import angular from 'angular';
import uiRouter from 'angular-ui-router';

import client from './clientOperations/client'
import clientSearch from './clientSearch/clientSearch'
import clientEssoGroup from './clientEssoGroup/clientEssoGroup'

let clientsModule = angular.module('clients', [
  uiRouter,
  clientSearch.name,
  clientEssoGroup.name,
  client.name
]);

export default clientsModule;
