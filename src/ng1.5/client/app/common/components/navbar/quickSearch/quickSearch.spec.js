import QuickSearchModule from './quickSearch'
import QuickSearchController from './quickSearch.controller';
import QuickSearchComponent from './quickSearch.component';
import QuickSearchTemplate from './quickSearch.html';

describe('QuickSearch', () => {
  let $rootScope, makeController;

  beforeEach(window.module(QuickSearchModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new QuickSearchController();
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
      let component = QuickSearchComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(QuickSearchTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(QuickSearchController);
      });
  });
});
