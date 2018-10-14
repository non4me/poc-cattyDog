export default class TasksCommonController {
  /*@ngInject*/ constructor($state, $rootScope, $scope, tasksCommonService) {
    this.name = 'tasksCommon';
    this.tasksCommonService = tasksCommonService;
    this.$rootScope = $rootScope;
    this.$state = $state;

    this.tableHeader = [
      {name: 'operations', type: 'taskTakeOver', linkMap: 'taskTakeOver', controller: 'takeOverModal',
        label: 'Převzít', headerClass: 'btns', columnName: '', sort: false
      },
      {name: 'signalId', type: 'link', linkMap: 'signalDetail',
        headerClass: 'signalId', linkUI: 'signals.detail',  columnName: 'ID signálu', sort: true},
      {name: 'clientName', type: 'link', linkMap: 'clientDetail',
        headerClass: 'auto',cellClass: 'one-line', linkUI: 'client.details', columnName: 'Klient', sort: true},
      {name: 'signalType', type: 'codebook', headerClass: 'auto',
        cellClass: 'one-line', columnName: 'Název signálu', sort: true},
      {name: 'riskClassification', type: 'codebook', 'icon': true,
        headerClass: 'classification', columnName: 'Klasifikace signálu', sort: true},
      {name: 'taskType', type: 'codebook', headerClass: 'taskType', columnName: 'Typ úkolu', sort: true},
      {name: 'taskStatus', type: 'codebook', valueFrom: 'ewsCmtName',
        headerClass: 'taskStatus', columnName: 'Stav úkolu', sort: true},
      {name: 'taskResolver', type: 'name', firstName: 'taskUserFirstName',
        lastName: 'taskUserLastName', headerClass: 'name', columnName: 'Zpracovatel úkolu', sort: true},
      {name: 'dueDate', type: 'date', headerClass: 'date', columnName: 'Datum zpracování', sort: true}
    ];

    this.data = [];
    this.totalItems = 0;
    (this.getData = (params) => {
      tasksCommonService.getList(params)
        .then((data) => {
          if (data && data.items) {
            this.data = data;
            this.totalItems = data.items.length;
          }
        });
    })();

    // fetch data from server for each page; (by request from Ondra)
    let paginationChangedEvent = this.$rootScope.$on('paginationChanged', (event, params) => {
      this.getData(params)
    });

    $scope.$on('$destroy', paginationChangedEvent);
  }

  refreshData() {
    this.$state.reload();
  }
}

