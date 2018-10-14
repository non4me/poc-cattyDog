import ClientOverviewModule from './clientOverview'
import ClientOverviewController from './clientOverview.controller';
import ClientOverviewComponent from './clientOverview.component';
import ClientOverviewTemplate from './clientOverview.html';

describe('ClientOverview', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientOverviewModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientOverviewController();
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
      let component = ClientOverviewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientOverviewTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientOverviewController);
      });
  });
});
