import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import quickSearch from './quickSearch/quickSearch';

let navbarModule = angular.module('navbar', [
    uiRouter,
    quickSearch.name
  ])

  .component('navbar', navbarComponent);

export default navbarModule;
