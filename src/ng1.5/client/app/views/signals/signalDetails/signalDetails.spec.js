import SignalDetailsModule from './signalDetails'
import SignalDetailsController from './signalDetails.controller';
import SignalDetailsComponent from './signalDetails.component';
import SignalDetailsTemplate from './signalDetails.html';

describe('SignalDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SignalDetailsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SignalDetailsController();
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
      let component = SignalDetailsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SignalDetailsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SignalDetailsController);
      });
  });
});
