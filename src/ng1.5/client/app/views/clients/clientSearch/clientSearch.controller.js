export default class ClientSearchController {
  /*@ngInject*/
  constructor($state, codebooksService, clientSearchService) {
    this.name = 'clients';
    this.searchService = clientSearchService;
    this.$state = $state;

    this.nameMinLength = 3;
    this.nameMaxLength = 50;
    this.icMaxLength = 30;
    this.cluidMaxLength = 30;
    this.checkAll = true;
    this.searchType = 'pofop'; // esso

    this.searchCriteria = {
      name: '',
      registrationNumber: '',
      cluid: ''
    };

    this.tablePoHeader = [
      {name: 'name', type: 'link', linkUI: 'clients.id.details', linkMap: 'clientDetail', cellClass: 'one-line',
        headerClass: 'auto', columnName: 'Název klienta', sort: true},
      {name: 'registrationNumber', cellClass: 'one-line',
        headerClass: 'regNum', columnName: 'IČ', sort: true},
      {name: 'rsm', headerClass: 'name', columnName: 'RSM', sort: true},
      {name: 'orgUnitName', cellClass: 'one-line',
        headerClass: 'orgUnitName', columnName: 'Obchodní místo', sort: true},
      {name: 'riskClassification', type: 'codebook', icon: true,
        headerClass: 'classification', columnName: 'Klasifikace', sort: true}
    ];

    this.tableEssoHeader =  [
      {name: 'name', type: 'link', linkUI: 'clients.esso', linkMap: 'essoGroupDetail',
        columnName: 'Název ESSO skupiny', sort: true},
      {name: 'gestorName', headerClass: 'name', columnName: 'Jméno gestora', sort: true},
      {name: 'gestorOrganizationUnit', headerClass: 'name', columnName: 'Obchodní místo', sort: true}
    ];

    this.riskClassifications = [];
    this.selectedClassifications = [];
    codebooksService.getAll().then((codebooks) => {
      if (codebooks && codebooks.CB_RiskClassification) {
        this.riskClassifications = codebooks.CB_RiskClassification.map((e) => {
          if (e.validForClient === true) return e;
        });

        this.riskClassifications.map((riskClasssification) => {
          this.selectedClassifications[riskClasssification.code] = true;
        });
      }
    });
  }

  searchClients(scope) {
    //TODO: use custom form validator function instead 'requiredAni'
    scope.$broadcast('update-multi-field-validators'); //trigger requiredAni directive
    if (scope.clientSearchForm.$invalid) return;

    if (this.searchType === 'pofop') {
      this.searchCriteria.riskClassifications = this.riskClassifications;
      this.searchService.getPO(this.searchCriteria)
        .then((data) => {
          this.data = data;
        })
        .catch((error) => {
          //TODO: error logic
        })
    }
    else {
      this.searchService.getESSO(this.searchCriteria)
        .then((data) => {
          this.data = data;
        })
        .catch((error) => {
          //TODO: error logic
        })
    }
  }

  isSet (val1, val2) {
    return !!(this.searchCriteria[val1] || this.searchCriteria[val2]);
  };

  resetFilter() {
    this.$state.reload();
  }

  changeSearchType() {
    this.data = null;
  }

  clickAll() {
    this.riskClassifications.map((riskClassification) => {
      this.selectedClassifications[riskClassification.code] = this.checkAll;
    })
  }
}
