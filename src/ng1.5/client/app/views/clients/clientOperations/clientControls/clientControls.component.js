import template from './clientControls.html';
import controller from './clientControls.controller';
import './clientControls.less';

let clientControlsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default clientControlsComponent;
