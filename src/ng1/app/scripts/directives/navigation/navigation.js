'use strict';
/* global angular */

/**
 * @ngdoc directive
 * @name demoApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('demoApp')
  .directive('navigation', function () {
    return {
      templateUrl: 'scripts/directives/navigation/navigation.html',
      restrict: 'E',
      replace: true,
      controller: function ($scope, $location) {
        var currentLocation = $location.path();

        $scope.$watch(function () {
          return currentLocation;
        }, function () {
          $scope.page = currentLocation;
        });

        $scope.openPage = function (url) {
          $scope.page = url;
          $location.url(url);
        }
      }
    };
  });
