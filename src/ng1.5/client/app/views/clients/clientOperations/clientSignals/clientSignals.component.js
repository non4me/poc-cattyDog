import template from './clientSignals.html';
import controller from './clientSignals.controller';
import './clientSignals.less';

let clientSignalsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default clientSignalsComponent;
