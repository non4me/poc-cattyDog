import TasksPrivateModule from './tasksPrivate'
import TasksPrivateController from './tasksPrivate.controller';
import TasksPrivateComponent from './tasksPrivate.component';
import TasksPrivateTemplate from './tasksPrivate.html';
import tasksService from '../../services/API/api';

describe('TasksPrivate', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TasksPrivateModule.name));
  beforeEach(inject((_$rootScope_, _tasksService_) => {
    $rootScope = _$rootScope_;
    tasksService = _tasksService_;
    makeController = () => {
      return new TasksPrivateController();
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
      let component = TasksPrivateComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TasksPrivateTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TasksPrivateController);
      });
  });
});
