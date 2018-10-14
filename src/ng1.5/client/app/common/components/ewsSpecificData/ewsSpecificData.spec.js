import EwsSpecificDataModule from './ewsSpecificData'
import EwsSpecificDataController from './ewsSpecificData.controller';
import EwsSpecificDataComponent from './ewsSpecificData.component';
import EwsSpecificDataTemplate from './ewsSpecificData.html';

describe('EwsSpecificData', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EwsSpecificDataModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EwsSpecificDataController();
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
      let component = EwsSpecificDataComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EwsSpecificDataTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EwsSpecificDataController);
      });
  });
});
