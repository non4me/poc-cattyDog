'use strict';
/* global angular, $ */

/**
 * @ngdoc directive
 * @name demoApp.directive:clickOut
 * @description
 * # clickOut
 */
angular.module('demoApp')
  .directive('clickOut', function ($document, $timeout) {
    return {
      link: function postLink(scope, element, attrs) {
        var onClick = function (event) {
          var isChild = $(element).has(event.target).length > 0;
          var isSelf = element[0] === event.target;
          var isInside = isChild || isSelf;
          if (!isInside) {
            scope.$apply(attrs.clickOut);
            $document.unbind('click', onClick);
          }
        };

        $timeout(function () {
          $document.bind('click', onClick);
        }, 500);
      }
    };
  });
