import EwsFormControlModule from './ewsFormControl'
import EwsFormControlController from './ewsFormControl.controller';
import EwsFormControlComponent from './ewsFormControl.component';
import EwsFormControlTemplate from './ewsFormControl.html';

describe('EwsFormControl', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EwsFormControlModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EwsFormControlController();
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
      let component = EwsFormControlComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EwsFormControlTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EwsFormControlController);
      });
  });
});
