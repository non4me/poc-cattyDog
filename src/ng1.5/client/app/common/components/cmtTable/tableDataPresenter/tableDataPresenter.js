import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tableDataPresenterComponent from './tableDataPresenter.component';

let tableDataPresenterModule = angular.module('tableDataPresenter', [
  uiRouter
])

.component('tableDataPresenter', tableDataPresenterComponent);

export default tableDataPresenterModule;
