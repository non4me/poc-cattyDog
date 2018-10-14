import template from './financialReport.html';
import controller from './financialReport.controller';
import './financialReport.less';

let financialReportComponent = {
  restrict: 'E',
  bindings: {
    data: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default financialReportComponent;
