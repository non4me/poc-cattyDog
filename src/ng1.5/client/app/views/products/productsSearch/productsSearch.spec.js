import ProductsSearchModule from './productsSearch'
import ProductsSearchController from './productsSearch.controller';
import ProductsSearchComponent from './productsSearch.component';
import ProductsSearchTemplate from './productsSearch.html';

describe('ProductsSearch', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductsSearchModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductsSearchController();
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
      let component = ProductsSearchComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductsSearchTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductsSearchController);
      });
  });
});
