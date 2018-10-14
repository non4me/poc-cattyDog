import ClientEssoGroupModule from './clientEssoGroup'
import ClientEssoGroupController from './clientEssoGroup.controller';
import ClientEssoGroupComponent from './clientEssoGroup.component';
import ClientEssoGroupTemplate from './clientEssoGroup.html';

describe('ClientEssoGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientEssoGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientEssoGroupController();
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
      let component = ClientEssoGroupComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientEssoGroupTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientEssoGroupController);
      });
  });
});
