import ClientSignalsModule from './clientSignals'
import ClientSignalsController from './clientSignals.controller';
import ClientSignalsComponent from './clientSignals.component';
import ClientSignalsTemplate from './clientSignals.html';

describe('ClientSignals', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientSignalsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientSignalsController();
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
      let component = ClientSignalsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientSignalsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientSignalsController);
      });
  });
});
