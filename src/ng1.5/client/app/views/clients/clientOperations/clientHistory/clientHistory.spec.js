import ClientHistoryModule from './clientHistory'
import ClientHistoryController from './clientHistory.controller';
import ClientHistoryComponent from './clientHistory.component';
import ClientHistoryTemplate from './clientHistory.html';

describe('ClientHistory', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientHistoryModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientHistoryController();
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
      let component = ClientHistoryComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientHistoryTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientHistoryController);
      });
  });
});