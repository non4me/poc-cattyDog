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
      templateUrl: 'ng1/app/scripts/directives/navigation/navigation.html',
      restrict: 'E',
      replace: true,
      controller: ['$scope', '$location', function ($scope, $location) {
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
      }]
    };
  });
