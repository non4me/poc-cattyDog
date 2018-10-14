export default class ControlsDetailController {
  /*@ngInject*/ constructor(controlsDetailService) {
    this.name = 'controlsDetail';

    this.productsTableHeader = [
      {name: 'agreementNumber', type: 'link', linkMap: 'productDetail', headerClass: 'productId',
        columnName: 'Název', sort: false},
      {name: 'amendmentNumber', headerClass: 'auto', cellClass: 'one-line',
        columnName: 'Dod.', sort: false},
      {name: 'description', type: 'link', headerClass: 'auto', cellClass: 'one-line',
        columnName: 'Typ produktu/ financování', sort: false},
      {name: 'creditMonitoringType', type: 'codebook',
        columnName: 'Typ produktu/ financování', sort: false},
      {name: 'productCmtStatus', type: 'codebook', 'icon': true, headerClass: 'classification',
        columnName: 'Status', sort: false},
      {name: 'loanAmount',
        columnName: 'Výše úvěru', sort: false},
      {name: 'loanCurrency',
        columnName: 'Měna', sort: false},
      {name: 'disbursementEndDate', type: 'date', headerClass: 'date',
        columnName: 'Čerpání do', sort: false},
      {name: 'signingDate ', type: 'date', headerClass: 'date',
        columnName: 'Datum podpisu ZS', sort: false},
      {name: 'state', type: 'codebook',
        columnName: 'Stav', sort: false}
    ];

    this.historyTableHeader = [
      {name: 'created', type: 'datetime', headerClass: 'datetime',
        columnName: 'Datum', sort: false},
      {name: 'user', type: 'columnGroup', groupItems: ['firstname', 'surname'], headerClass: 'name',
        columnName: 'Uživatel', sort: false},
      {name: 'organizationUnitDisplayName', headerClass: 'orgUnitName', cellClass: 'one-line',
        columnName: 'Útvar', sort: false},
      {name: 'note', type: 'note',
        columnName: 'Poznámka', sort: false},
      {name: 'resultReason', type: 'codebook',
        columnName: 'Důvod', sort: false}
    ];

    this.data = [];
    controlsDetailService.getList()
      .then((data) => {
        if (data) {
          this.data = data;
        }
      });
  }
}

