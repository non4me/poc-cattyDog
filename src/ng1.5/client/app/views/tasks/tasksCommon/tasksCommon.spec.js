import TasksCommonModule from './tasksCommon'
import TasksCommonController from './tasksCommon.controller';
import TasksCommonComponent from './tasksCommon.component';
import TasksCommonTemplate from './tasksCommon.html';

describe('TasksCommon', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TasksCommonModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TasksCommonController();
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
      let component = TasksCommonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TasksCommonTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TasksCommonController);
      });
  });
});
