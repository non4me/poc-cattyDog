import TablePaginationModule from './tablePagination'
import TablePaginationController from './tablePagination.controller';
import TablePaginationComponent from './tablePagination.component';
import TablePaginationTemplate from './tablePagination.html';

describe('TablePagination', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TablePaginationModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TablePaginationController();
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
      let component = TablePaginationComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TablePaginationTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TablePaginationController);
      });
  });
});
