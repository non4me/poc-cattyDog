import ControlsDetailModule from './controlsDetail'
import ControlsDetailController from './controlsDetail.controller';
import ControlsDetailComponent from './controlsDetail.component';
import ControlsDetailTemplate from './controlsDetail.html';

describe('ControlsDetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ControlsDetailModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ControlsDetailController();
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
      let component = ControlsDetailComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ControlsDetailTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ControlsDetailController);
      });
  });
});
