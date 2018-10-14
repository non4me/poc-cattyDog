export default class ClientSignalsController {
  constructor(clientSignalsService, $stateParams) {
    'ngInject';
    this.name = 'clientSignals';
    
    this.tableHeader = [
      {
        name: 'signalId', type: 'link',
        linkMap: 'signalDetail', 'duplicatedIconTooltip': 'Duplicitní signál',
        headerClass: 'signalIdOpen', 'actionPlanIconTooltip': 'Signál, ze kterého pochází akční plán.',
        linkUI: 'signals.detail', columnName: 'ID Signálu', sort: true
      },
      {name: 'signalType', type: 'codebook', headerClass: 'auto', columnName: 'Název signálu', sort: false},
      {name: 'riskClassification', type: 'codebook', icon: true, headerClass: 'classification',
        columnName: 'Klasifikace signálu', sort: true},
      {name: 'signalStatus', type: 'codebook', 'icon': true, headerClass: 'signalStatus',
        columnName: 'Stav signálu', sort: false},
      {name: 'signalCreationDate', type: 'date', headerClass: 'date', columnName: 'Datum založení', sort: true},
      {name: 'actionPlanChangeDate', type: 'date', headerClass: 'date', columnName: 'Datum poslední změny AP', sort: true}
    ];

    this.clientId = $stateParams.clientId;
    clientSignalsService.getById(this.clientId)
      .then((data) => {
        if (typeof data === 'object') {
          this.data = data;
        }
      })
  }
}

ClientSignalsController.$inject = ['clientSignalsService', '$stateParams'];
