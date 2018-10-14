import template from './clientOverview.html';
import controller from './clientOverview.controller';
import './clientOverview.less';

//TODO refactor binding to final state
let clientOverviewComponent = {
  restrict: 'E',
  bindings: {
    template: '@',
    data: '<',
    type: '@',
    collapsible: '<',
    codebooks: '<',
    links: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default clientOverviewComponent;
