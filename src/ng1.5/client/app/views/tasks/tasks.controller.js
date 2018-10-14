class TasksController {
  /**
   * @param {tasksService} tasksService
   */
  constructor() {
    this.name = 'TasksController';
    this.data = [];
    this.tabs = [
      {id: 'private', label: 'Moje úkoly', order: 1},
      {id: 'common', label: 'Společné úkoly', order: 2},
      {id: 'planned', label: 'Plánované úkoly', order: 3}
    ];
  }
}

export default TasksController;
