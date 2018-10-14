'use strict';

import alertsTemplate from './alerts.html';

module.exports = /*@ngInject*/ function ( $rootScope, $window) { //errorsService
  return {
    restrict: 'E',
    scope: {
      severity: '@'
    },
    template: alertsTemplate,
    link: function link(scope, element, attrs) {
      scope.stickStyle = {};
      //scope.errorsService = errorsService;
      scope.version = $rootScope.version;

//TODO refactoring
      // if (attrs['noSticky'] === undefined) {
      //   //handle stick behaviour on scroll
      //   var window = angular.element($window);
      //   window.scroll(function () {
      //     var windowTop = window.scrollTop(),
      //       parentTop = $(element).parent().offset().top;
      //
      //     $(element).css('min-height', $(element).height());
      //     scope.stick = windowTop > parentTop;
      //     if (scope.stick) {
      //       $(element).css('min-height', $(element).height());
      //       scope.stickStyle = {width: $(element).width()};
      //     } else {
      //       $(element).css('min-height', 'initial');
      //       scope.stickStyle = {width: 'initial'}
      //     }
      //     scope.$apply();
      //   });
      // }

      scope.isViewable = function(name) {
        return ['time', 'node', 'uuid'].indexOf(name) != -1;
      };

      scope.getAlertClass = function (alert) {
        var classMap = {
          'E': 'error',
          'W': 'warning'
        };
        return 'ews-' + classMap[alert.data.severity];
      };
    }
  }
};
