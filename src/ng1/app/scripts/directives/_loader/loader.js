'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:loader
 * @description
 * # loader
 */
angular.module('demoApp')
    .directive('loader', function () {
      return {
        templateUrl: 'scripts/directives/_loader/loader.html',
        restrict: 'E',
        replace: true,
        scope: {},
        controller: function ($scope, $rootScope) {
          $scope.isLoading = false;

          var loaderStart = $rootScope.$on('startLoading', function () {
            $scope.isLoading = true;
          });

          var loaderStop = $rootScope.$on('stopLoading', function () {
            $scope.isLoading = false;
          });

          $rootScope.$on(
              "$destroy",
              function handleDestroyEvent() {
                loaderStart();
                loaderStop();
              }
          );
        }
      };
    });
