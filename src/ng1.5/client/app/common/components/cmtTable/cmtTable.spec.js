import CmtTableModule from './cmtTable'
import CmtTableController from './cmtTable.controller';
import CmtTableComponent from './cmtTable.component';
import CmtTableTemplate from './cmtTable.html';

describe('CmtTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CmtTableModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CmtTableController();
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
      let component = CmtTableComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CmtTableTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CmtTableController);
      });
  });
});
