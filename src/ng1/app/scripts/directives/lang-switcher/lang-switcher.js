'use strict';
/* global angular */

/**
 * @ngdoc directive
 * @name demoApp.directive:langSwitcher
 * @description
 * # langSwitcher
 */
angular.module('demoApp')
  .directive('langSwitcher', function () {
    return {
      templateUrl: 'ng1/app/scripts/directives/lang-switcher/lang-switcher.html',
      restrict: 'E',
      replace: true,
      controller: function($scope, $translate) {

        $scope.changeLanguage = function (key) {
          $translate.use(key);
          $scope.defaultLanuage = window.localStorage.lang = key;
        };

        $scope.defaultLanuage = window.localStorage.lang || $translate.preferredLanguage();

        if($scope.defaultLanuage) {
          $scope.changeLanguage($scope.defaultLanuage);
        }
      }
    };
  });
