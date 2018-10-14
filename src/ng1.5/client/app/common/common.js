import angular from 'angular';
import commonDirectives from './directives/directives';
import commonComponents from './components/components';
import commonServices from './services/API/api';
import commonFilters from './filters/filters';

let commonModule = angular.module('app.common', [
  commonComponents.name,
  commonDirectives.name,
  commonServices.name,
  commonFilters.name
]);

export default commonModule;
