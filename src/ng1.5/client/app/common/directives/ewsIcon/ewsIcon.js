'use strict';

module.exports = /*@ngInject*/ function ewsIcon() {
  var mapping = {
    'EW0': 'ews-icon-green',
    'EW1': 'ews-icon-yellow',
    'EW2': 'ews-icon-orange',
    'EW3': 'ews-icon-red',
    'DUPLICITY': 'ews-icon-exclamation-mark',
    'FILED': 'ews-icon-grey',
    'CAPTURED': 'ews-icon-grey',
    'ASSESSED': 'ews-icon-grey',
    'VALIDATED': 'ews-icon-grey',
    'INVALIDATED': 'ews-icon-grey',
    'CLASSIFIED': 'ews-icon-yellow',
    'OK_CLOSED': 'ews-icon-green',
    'NOK_CLOSED': 'ews-icon-red',
    'DELETED': 'ews-icon-grey',
    'ews-icon-check-green': 'ews-icon-check-green',
    'duplicated' : 'ews-icon-exclamation-mark',
    'actionPlanSignal':'ews-icon-check-green'
  };
  return {
    restrict: 'A',
    scope: {
      'ewsIcon': '&'
    },
    link: function link(scope, element, attrs) {
      element.addClass('ews-icon ' + mapping[scope.ewsIcon()]);
    }

  }
};
