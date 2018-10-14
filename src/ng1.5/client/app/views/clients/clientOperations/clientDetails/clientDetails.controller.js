export default class ClientDetailsController {
  /*@ngInject*/ constructor(clientDetailsService, $stateParams) {
    this.name = 'clientDetails';

    this.clientId = $stateParams.clientId;
    this.tableHeader = [
      {
        name: 'signalId', columnName: 'ID Signálu', type: 'link',
        linkMap: 'signalDetail', linkUI: 'signals.detail',
        duplicatedIconTooltip: 'Duplicitní signál',
        headerClass: 'signalIdOpen',
        'actionPlanIconTooltip': 'Signál, ze kterého pochází akční plán.'
      },
      {name: 'signalType', columnName: 'Název signálu', type: 'codebook',
        headerClass: 'auto'},
      {name: 'riskClassification', columnName: 'Klasifikace signálu',
        type: 'codebook', icon: true, headerClass: 'classification'},
      {name: 'signalStatus', columnName: 'Stav signálu',
        type: 'codebook', 'icon': true, headerClass: 'signalStatus'},
      {name: 'signalCreationDate', columnName: 'Datum založení',
        type: 'date', headerClass: 'date'},
      {name: 'actionPlanChangeDate', columnName: 'Datum poslední změny AP',
        type: 'date', headerClass: 'date'}
    ];

    if($stateParams.clientId) {
      clientDetailsService.getById($stateParams.clientId).then((data) => {
        this.data = data;
      });
    }
  }
}
