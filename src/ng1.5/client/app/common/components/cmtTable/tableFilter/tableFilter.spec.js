import TableFilterModule from './tableFilter'
import TableFilterController from './tableFilter.controller';
import TableFilterComponent from './tableFilter.component';
import TableFilterTemplate from './tableFilter.html';

describe('TableFilter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TableFilterModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TableFilterController();
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
      let component = TableFilterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TableFilterTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TableFilterController);
      });
  });
});
