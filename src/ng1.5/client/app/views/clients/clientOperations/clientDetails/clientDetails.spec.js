import ClientDetailsModule from './clientDetails'
import ClientDetailsController from './clientDetails.controller';
import ClientDetailsComponent from './clientDetails.component';
import ClientDetailsTemplate from './clientDetails.html';

describe('ClientDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientDetailsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientDetailsController();
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
      let component = ClientDetailsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientDetailsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientDetailsController);
      });
  });
});
