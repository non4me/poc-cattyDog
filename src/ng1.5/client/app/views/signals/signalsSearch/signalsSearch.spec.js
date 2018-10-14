import SignalsSearchModule from './signalsSearch'
import SignalsSearchController from './signalsSearch.controller';
import SignalsSearchComponent from './signalsSearch.component';
import SignalsSearchTemplate from './signalsSearch.html';

describe('SignalsSearch', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SignalsSearchModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SignalsSearchController();
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
      let component = SignalsSearchComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SignalsSearchTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SignalsSearchController);
      });
  });
});
