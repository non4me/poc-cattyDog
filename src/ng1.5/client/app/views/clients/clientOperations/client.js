import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientComponent from './client.component';

import clientControls from './clientControls/clientControls';
import clientsDetails from './clientDetails/clientDetails';
import clientHistory from './clientHistory/clientHistory';
import clientProducts from './clientProducts/clientProducts';
import clientSignals from './clientSignals/clientSignals';
import clientAddSignal from './clientAddSignal/clientAddSignal';

let clientModule = angular.module('client', [
    uiRouter,
    clientControls.name,
    clientsDetails.name,
    clientHistory.name,
    clientProducts.name,
    clientSignals.name,
    clientAddSignal.name
  ])

  .component('client', clientComponent);

export default clientModule;
