export default class SignalsSearchController {
  /*@ngInject*/
  constructor($state, codebooksService, signalsSearchService) {
    this.name = 'signalsSearch';
    this.searchService = signalsSearchService;
    this.$state = $state;

    this.tableHeader = [
      {name: 'signalId', type: 'link', linkUI: 'signals.detail', linkMap: 'signalDetail',
        headerClass: 'signalId', columnName: 'ID Signálu', sort: true
      },
      {name: 'signalType', type: 'codebook', headerClass: 'signalType',
        columnName: 'Název', sort: true
      },
      {name: 'riskClassification', type: 'codebook', icon: true,
        headerClass: 'classification', columnName: 'Název klienta', sort: true
      },
      {name: 'signalStatus', type: 'codebook', headerClass: 'signalStatus',
        columnName: 'Název klienta', sort: true
      },
      {name: 'signalDescription', cellClass: 'one-line',
        columnName: 'Název klienta', sort: true
      },
      {name: 'signalCreationDate', type: 'date', headerClass: 'date',
        columnName: 'Název klienta', sort: true
      }
    ];

    this.signalIdMaxLength = 10;
    this.signalDescriptionMaxLength = 200;
    this.formControlMode = 'edit';
    this.currentDate = new Date();
    this.currentDate.setHours(0, 0, 0, 0);
    this.hideInSelect = ["DUPLICITY", "DELETED"];
    this.searchedClients = null;
    this.searchWithCluid = {
      cluid: ''
    };

    this.searchCriteria = {
      signal: {
        signalDescription: '',
        signalStatus: '',
        signalType: '',
        signalId: '',
        actionPlanDueDateFrom: '',
        actionPlanDueDateTo: '',
        actionPlanChangeDateFrom: '',
        actionPlanChangeDateTo: '',
        signalClassificationDateFrom: '',
        signalClassificationDateTo: '',
        signalClosingDateFrom: '',
        signalClosingDateTo: '',
        signalCreateDateFrom: '',
        signalCreateDateTo: '',
        signalValidationDateFrom: '',
        signalValidationDateTo: '',
        riskClassifications: []
      },
      client: {
        data: null,
        cluidSelected: []
      }
    };

    codebooksService.getAll()
      .then((codebooks) => {
        this.signalStatuses = codebooks.CB_EarlyWarningSignalStatus;
        this.signalTypes = codebooks.CB_EarlyWarningSignalType;
        this.riskClassifications = codebooks.CB_RiskClassification.filter((e) => {
          return e.validForSignal === true;
        });

        this.selectedClassifications = {};
        angular.forEach(this.riskClassifications, (riskClassification) => {
          this.selectedClassifications[riskClassification.code] = true;
        });
      });
  }

  //TODO: Remove user rights from _link to AllowedOperations
  isAllowed(rights){
    return true;
  }

  isSet (values = []) {
    return !!values.join('');
  };

  clickAll() {
    angular.forEach(this.riskClassifications, (riskClassification) => {
      this.selectedClassifications[riskClassification.code] = true;
    });
  };

  searchSignals() {
    debugger;
  }
}

