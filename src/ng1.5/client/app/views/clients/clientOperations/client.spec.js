import ClientModule from './client'
import ClientController from './client.controller';
import ClientComponent from './client.component';
import ClientTemplate from './client.html';

describe('Client', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientController();
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
      let component = ClientComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientController);
      });
  });
});
