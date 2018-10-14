import angular from 'angular';
import uiRouter from 'angular-ui-router';
import financialReportComponent from './financialReport.component';

let financialReportModule = angular.module('financialReport', [
  uiRouter
])

.component('financialReport', financialReportComponent);

export default financialReportModule;
