import angular from 'angular';
import 'angular-mocks';

import mockService from './mock.service'

let mocksModule = angular.module('app.mocks', [])
  .config(function ($provide) {
    'ngInject';
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  })
  .service({mockService});

export default mocksModule;


