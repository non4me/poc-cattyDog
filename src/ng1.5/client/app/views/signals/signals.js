import angular from 'angular';
import uiRouter from 'angular-ui-router';

import signalDetails from './signalDetails/signalDetails';
import signalsSearch from './signalsSearch/signalsSearch';

let signalsModule = angular.module('signals', [
    uiRouter,
    signalDetails.name,
    signalsSearch.name
  ]);

export default signalsModule;
