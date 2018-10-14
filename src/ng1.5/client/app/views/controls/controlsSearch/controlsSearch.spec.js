import ControlsSearchModule from './controlsSearch'
import ControlsSearchController from './controlsSearch.controller';
import ControlsSearchComponent from './controlsSearch.component';
import ControlsSearchTemplate from './controlsSearch.html';

describe('ControlsSearch', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ControlsSearchModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ControlsSearchController();
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
      let component = ControlsSearchComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ControlsSearchTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ControlsSearchController);
      });
  });
});
