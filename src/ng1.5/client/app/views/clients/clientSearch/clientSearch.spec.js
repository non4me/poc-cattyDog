import ClientSearchModule from './clientSearch'
import ClientSearchController from './clientSearch.controller';
import ClientSearchComponent from './clientSearch.component';
import ClientSearchTemplate from './clientSearch.html';

describe('ClientSearch', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientSearchModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientSearchController();
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
      let component = ClientSearchComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientSearchTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientSearchController);
      });
  });
});
