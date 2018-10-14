import template from './tableDataPresenter.html';
import controller from './tableDataPresenter.controller';
import './tableDataPresenter.less';

let tableDataPresenterComponent = {
  restrict: 'E',
  bindings: {
    column: '<',
    record: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default tableDataPresenterComponent;
