import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'ui-router-extras';

import Common from './common/common';
import Views from './views/views';
//import 'normalize.css';

import AppComponent from './app.component';
import AppConfiguration from './app.config';
import AppRouter from './app.router';

angular.module('app', [
    uiRouter,
    'ct.ui.router.extras.core',
    'ct.ui.router.extras.dsr',
    Common.name,
    Views.name
  ])
  // .config(($locationProvider) => {
  //   "ngInject";
  //   $locationProvider.html5Mode(true).hashPrefix('!');
  // })

  .value('appConf', AppConfiguration)

  .config(AppRouter)

  .component('app', AppComponent)

  //  once setup userRights in appConf
  // need allowedOperations block in index
  // "allowedOperations": {
  //   "main": ["tasks", "clients", "signals", "products", "controls", "quickSearch"],
  //   "tasks": ["searchCommon", "searchPlanned", "searchPrivate"],
  //   "clients": ["clientSearch", "essoGroupSearch"],
  //   "signals": ["clientSearch", "signalSearch"]
  // },
  // .run(/*@ngInject*/ function (appConf, indexService) {
  //   indexService.getAll().then(function (data) {
  //     appConf.user = {
  //       name : data.name,
  //       login : data.login,
  //       version : data.version,
  //       rights: data.allowedOperations
  //     }
  //   });
  // })
  ;

angular.bootstrap(document.body, ['app'], {strictDi: true});


