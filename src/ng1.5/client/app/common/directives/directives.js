import angular from 'angular';
import ewsIcon from './ewsIcon/ewsIcon';
import alerts from './alerts/alerts';
import openDeepLink from './openDeepLink/openDeepLink';
import requiredAny from './requiredAny/requiredAny';
import dateGreaterThan from './date/dateGreaterThan';
import dateLowerThan from './date/dateLowerThan';

let directiveModule = angular.module('app.common.directives', [])
  .directive('ewsIcon', ewsIcon)
  .directive('openDeepLink', openDeepLink)
  .directive('alerts', alerts)
  .directive('requiredAny', requiredAny)
  .directive('dateGreaterThan', dateGreaterThan)
  .directive('dateLowerThan', dateLowerThan)
  ;

export default directiveModule;
