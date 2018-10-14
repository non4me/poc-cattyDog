'use strict';

module.exports = /*@ngInject*/ function openDeepLink() {
  return {
    restrict: 'A',
    scope: {
      'openDeepLink': '@'
    },
    link: function link(scope, element) {
      element.on('click', function(event) {
        event.preventDefault();

        var url = scope.openDeepLink;
        var windowName = '_blank';
        if(url.indexOf('/cognos') > -1) windowName = 'Cognos';
        else if(url.indexOf('/colman') > -1) windowName = 'Colman';
        else if(url.indexOf('/taskspace') > -1) windowName = 'DMX';

        var newWin =  window.open('', windowName);
        newWin.document.title = windowName;
        newWin.location.replace(url);
        newWin.opener = null;
      });

      scope.$on('$destroy', function(){
        element.off('mousedown');
      });
    }
  }
};
