export default class TasksPrivateController {
  /*@ngInject*/ constructor($state, tasksPrivateService) {
    this.name = 'tasksPrivate';
    this.tasksPrivateService = tasksPrivateService;
    this.$state = $state;

    this.tableHeader = [
      {
        name: 'operations', columnName: '', type: 'taskTakeOver', linkMap: 'taskTakeOver',
        controller: 'takeOverModal', label: 'Převzít', headerClass: 'btns', sort: false
      },
      {name: 'signalId', columnName: 'ID signálu', type: 'link', linkMap: 'signalDetail',
        linkUI: 'signals.detail', headerClass: 'signalId', sort: true},
      {name: 'clientName', columnName: 'Klient', type: 'link', linkMap: 'clientDetail',
        linkUI: 'clients.id.details', headerClass: 'auto',cellClass: 'one-line', sort: true},
      {name: 'signalType', columnName: 'Název signálu', type: 'codebook',
        headerClass: 'auto',cellClass: 'one-line', sort: true},
      {name: 'riskClassification', columnName: 'Klasifikace signálu',
        type: 'codebook', 'icon': true, headerClass: 'classification', sort: true},
      {name: 'taskType', columnName: 'Typ úkolu', type: 'codebook', headerClass: 'taskType', sort: true},
      {name: 'taskStatus', columnName: 'Stav úkolu', type: 'codebook',
        valueFrom: 'ewsCmtName', headerClass: 'taskStatus', sort: true},
      {name: 'createdDate', columnName: 'Vytvořeno', type: 'date', headerClass: 'date', sort: true},
      {name: 'dueDate', columnName: 'Datum zpracování', type: 'date', headerClass: 'date', sort: true}
    ];

    this.data = [];
    this.totalItems = 0;
    tasksPrivateService.getList()
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


