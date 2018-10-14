import TableDataPresenterModule from './tableDataPresenter'
import TableDataPresenterController from './tableDataPresenter.controller';
import TableDataPresenterComponent from './tableDataPresenter.component';
import TableDataPresenterTemplate from './tableDataPresenter.html';

describe('TableDataPresenter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TableDataPresenterModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TableDataPresenterController();
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
      let component = TableDataPresenterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TableDataPresenterTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TableDataPresenterController);
      });
  });
});
