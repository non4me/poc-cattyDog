import FinancialReportModule from './financialReport'
import FinancialReportController from './financialReport.controller';
import FinancialReportComponent from './financialReport.component';
import FinancialReportTemplate from './financialReport.html';

describe('FinancialReport', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FinancialReportModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FinancialReportController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FinancialReportComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FinancialReportTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FinancialReportController);
      });
  });
});
