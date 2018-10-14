import template from './clientHistory.html';
import controller from './clientHistory.controller';
import './clientHistory.less';

let clientHistoryComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default clientHistoryComponent;
