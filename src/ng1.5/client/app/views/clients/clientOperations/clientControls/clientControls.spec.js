import ClientControlsModule from './clientControls'
import ClientControlsController from './clientControls.controller';
import ClientControlsComponent from './clientControls.component';
import ClientControlsTemplate from './clientControls.html';

describe('ClientControls', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientControlsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientControlsController();
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
      let component = ClientControlsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientControlsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientControlsController);
      });
  });
});
