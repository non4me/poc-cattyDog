import template from './signalDetails.html';
import controller from './signalDetails.controller';
import './signalDetails.less';

let signalDetailsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default signalDetailsComponent;
