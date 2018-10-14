import TasksPlannedModule from './tasksPlanned'
import TasksPlannedController from './tasksPlanned.controller';
import TasksPlannedComponent from './tasksPlanned.component';
import TasksPlannedTemplate from './tasksPlanned.html';

describe('TasksPlanned', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TasksPlannedModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TasksPlannedController();
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
      let component = TasksPlannedComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TasksPlannedTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TasksPlannedController);
      });
  });
});
