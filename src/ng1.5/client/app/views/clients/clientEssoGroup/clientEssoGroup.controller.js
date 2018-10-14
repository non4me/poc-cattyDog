export default class ClientEssoGroupController {
  /*@ngInject*/
  constructor($stateParams, clientEssoService) {
    this.name = 'clientEssoGroup';
    this.groupId = $stateParams.groupId;

    this.tableHeader = [
      {name: 'registrationNumber',
        headerClass: 'icRc', columnName: 'IČ / RČ klienta', sort: false},
      {name: 'name', type: 'link', linkUI: 'clients.id.details', 'linkMap': 'clientDetail',
        headerClass: 'auto', columnName: 'Název klienta', sort: false},
      {name: 'riskClassification', type: 'codebook', icon: true,
        headerClass: 'classification', columnName: 'Klasifikace klienta', sort: false},
      {name: 'deeplinkDmx', type: 'deeplink',
        headerClass: 'auto', columnName: 'Odkaz do DMX', sort: false},
      {name: 'deeplinkColman', type: 'deeplink',
        headerClass: 'auto', columnName: 'Odkaz do Colman', sort: false}
    ];

    clientEssoService.getById(this.groupId).then((data) => {
      this.data = data;
    })
  }
}

