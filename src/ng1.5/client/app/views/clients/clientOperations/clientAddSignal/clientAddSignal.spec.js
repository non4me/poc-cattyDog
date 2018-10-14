import ClientAddSignalModule from './clientAddSignal'
import ClientAddSignalController from './clientAddSignal.controller';
import ClientAddSignalComponent from './clientAddSignal.component';
import ClientAddSignalTemplate from './clientAddSignal.html';

describe('ClientAddSignal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientAddSignalModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientAddSignalController();
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
      let component = ClientAddSignalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientAddSignalTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientAddSignalController);
      });
  });
});
