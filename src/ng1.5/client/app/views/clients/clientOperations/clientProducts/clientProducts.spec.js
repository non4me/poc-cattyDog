import ClientProductsModule from './clientProducts'
import ClientProductsController from './clientProducts.controller';
import ClientProductsComponent from './clientProducts.component';
import ClientProductsTemplate from './clientProducts.html';

describe('ClientProducts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ClientProductsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ClientProductsController();
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
      let component = ClientProductsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ClientProductsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ClientProductsController);
      });
  });
});
