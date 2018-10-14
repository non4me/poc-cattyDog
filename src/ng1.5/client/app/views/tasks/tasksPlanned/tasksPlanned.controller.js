export default class TasksPlannedController {
  /*@ngInject*/ constructor($state, tasksPlannedService) {
    this.name = 'tasksPlanned';
    this.$state = $state;

    // TODO: Discuss about move linkMap info from _link to record
    this.tableHeader = [
      {
        name: 'operations', type: 'postButtonArray', headerClass: 'btns-lg', buttons: [
        {linkMap: 'taskEvaluate', label: 'Upravit signál', cellClass: 'one-line'},
        {linkMap: 'taskCreateComment', label: 'Okomentovat\u000Asignál', cellClass: 'multi-line'}
      ], columnName: '', sort: false
      },
      {name: 'signalId', type: 'link', linkMap: 'signalDetail', headerClass: 'signalId',
        linkUI: 'signals.detail', columnName: 'ID signálu', sort: true},
      {name: 'signalDescription',headerClass: 'auto',cellClass: 'one-line' ,
        columnName: 'Popis', sort: true},
      {name: 'signalType', type: 'codebook', headerClass: 'auto',cellClass: 'one-line' ,
        columnName: 'Název signálu', sort: true},
      {name: 'riskClassification', type: 'codebook', 'icon': true, headerClass: 'classification' ,
        columnName: 'Klasifikace signálu', sort: true},
      {name: 'actionPlanDueDate', type: 'date', headerClass: 'date', columnName: 'Datum zpracování', sort: true},
      {name: 'resolverRole', type: 'codebook', headerClass: 'resolverRole', columnName: 'Role zpracovatele', sort: true}
    ];

    this.data = [];
    this.totalItems = 0;
    tasksPlannedService.getList()
      .then((data) => {
        if (data && data.items) {
          this.data = data;
          this.totalItems = data.items.length;
        }
      });
  }

  refreshData() {
    this.$state.reload();
  }
}

