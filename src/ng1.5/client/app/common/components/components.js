import angular from 'angular';
import navbar from './navbar/navbar';
import cmtTable from './cmtTable/cmtTable';
import financialReport from './financialReport/financialReport';
import clientOverview from './clientOverview/clientOverview';
import ewsSpecificData from './ewsSpecificData/ewsSpecificData';
import ewsFormControl from './ewsFormControl/ewsFormControl';

let componentsModule = angular.module('app.common.components', [
  navbar.name,
  cmtTable.name,
  financialReport.name,
  clientOverview.name,
  ewsSpecificData.name,
  ewsFormControl.name
]);

export default componentsModule;
