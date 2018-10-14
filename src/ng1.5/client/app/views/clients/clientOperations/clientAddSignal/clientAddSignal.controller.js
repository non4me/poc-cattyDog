export default class ClientAddSignalController {
  /*@ngInject*/
  constructor($stateParams, $state, $filter, appConf, clientDetailsService, clientSignalsService, codebooksService) {
    this.name = 'clientAddSignal';

    this.$state = $state;
    this.clientSignalsService = clientSignalsService;

    this.clientId = $stateParams.clientId;
    this.noteMinLength = appConf.MIN_SIGNAL_NOTE_LENGTH;
    this.noteMaxLength = appConf.MAX_SIGNAL_NOTE_LENGTH;
    this.descriptionMaxLength = appConf.MAX_SIGNAL_DESCRIPTION_LENGTH;
    this.signalHistory = {
      note: ''
    };
    const hideInSelect = ["T006", "T012", "T015", "T016"];
    this.signalTypeModels = {
      'T001': {
        previousRating: '',
        previousRatingDate: '',
        clientRating: '',
        currentRatingDate: '',
        ratingMethod: ''
      },
      'T002': {
        pastDueAmountCZK: '',
        pastDueAmountEUR: '',
        daysPastDue: '',
        pastDueDate: ''
      },
      'T003': {
        pastDueAmountOtherBankCZK: '',
        pastDueAmountOtherBankEUR: '',
        daysPastDueOtherBank: '',
        pastDueDateOtherBank: '',
        numberOfClaimingBanks: ''
      },
      'T004': {
        turnoverFactToDate: '',
        turnoverFactDateFrom: '',
        turnoverFactDateTo: '',
        turnoverCZK: '',
        turnoverEUR: '',
        averageMonthlyTurnoverCZK: '',
        averageMonthlyTurnoverEUR: '',
        turnoverPercentageChange: '',
        numberOfTransactions: '',
        averageTransactionsPerMonth: ''
      },
      'T005': {
        reservationType: '',
        reservationIssuerName: '',
        reservationStartDate: '',
        reservationAmountCZK: '',
        reservationAmountEUR: '',
        reservationAccountNumber: '',
        distraintAccountNumber: '',
        distraintIssueDate: '',
        distraintAmountCZK: '',
        distraintAmountEUR: '',
        distraintActId: '',
        distraintIssuerName: ''
      },
      'T007': {
        termInstanceId: '',
        termType: ''
      },
      'T009': {
        insolvencySubmitterName: '',
        insolvencyId: '',
        insolvencyCreationDate: '',
        insolvencyEndDate: ''
      },
      'T010': {
        overdraftFactToDate: '',
        overdraftFactDateFrom: '',
        overdraftFactDateTo: '',
        monthlyAverageUtilizationCZK: '',
        monthlyAverageUtilizationEUR: '',
        actualOverdraftUtilizationCZK: '',
        averageOverdraftUtilizationEUR: '',
        eomOverdraftUtilizationCZK: '',
        eomOverdraftUtilizationEUR: ''
      },
      'T011': {
        connectedPersonChange: false,
        absoluteOwnerChange: false,
        majorityShareholderChange: false,
        minorityShareholderChange: false,
        statutoryBodyMemberChange: false,
        controlledSubjectChange: false,
        realOwnerChange: false,
        authorisedAgentChange: false,
        connectedPersonEpbChange: false,
        directingPersonChange: false,
        residencyChange: false,
        basicCapitalCzkChange: false,
        clientNameChange: false
      },
      'T013': {
        clientAlertType: '',
        clientAlertCategory: '',
        clientAlertValidFrom: ''
      },
      'T014': {
        pledgeReceivablesFactToDate: '',
        pledgeReceivableSumCZK: '',
        expectedReceivableSumCZK: '',
        carriedOutReceivableSumCZK: '',
        carriedOutReceivablesPct: '',
        matchedReceivablesPct: ''
      }
    };
    this.signalTypeSelected = 'T008';
    this.signalSubTypeSelected = 'T008S01';
    this.signalTypeCodes = {};
    this.signalSubTypeCodes = {};

    codebooksService.getAll().then((codebooks) => {
      angular.forEach(codebooks.CB_EarlyWarningSignalType, (type) => {
        let subTypeCodes = {};
        if (hideInSelect.indexOf(type.code) === -1) {

          angular.forEach(codebooks.CB_EarlyWarningSignalSubType, (subtype) => {
            let patt = new RegExp(type.code + '(.*)');
            if (subtype.availableManualInitialization && patt.test(subtype.code)) {
              subTypeCodes[subtype.code] = subtype;
            }
          });

          this.signalTypeCodes[type.code] = type;
          this.signalSubTypeCodes[type.code] = subTypeCodes;
        }
      });

      this.findDescription =  (signalType, codebookName) => {
        let description = '';

        if(angular.isArray(codebooks[codebookName])) {
          const findedBook = codebooks[codebookName].filter((e) => {
            return e.code === signalType
          });
          description = findedBook[0] && findedBook[0].displayValue;
        }

        return description;
      };

      this.newSignal = {
        signalTypeCode: this.signalTypeCode,
        signalSubTypeCode: this.signalSubTypeCodes[this.signalTypeSelected][this.signalSubTypeSelected] && this.signalSubTypeCodes[this.signalTypeSelected][this.signalSubTypeSelected].code,
        riskClassificationCode: '',
        description: this.findDescription(this.signalTypeSelected, 'CB_EarlyWarningSignalType'),
        note: ''
      };

      this.classifications = codebooks.CB_RiskClassification;
    });

    if (this.clientId) {
      clientDetailsService.getById(this.clientId).then((data) => {
        this.data = data;
      });
    }
  }

  signalTypeSelectedChange(scope) {
    this.newSignal.signalTypeCode = this.signalTypeSelected;
    this.signalSubTypeSelected = this.signalTypeSelected + "S01";
    scope.createSignalForm.$setPristine(true);
  }

  signalSubTypeSelectedChange(scope) {
    const type = this.signalTypeSelected;
    const classification = this.newSignal.riskClassificationCode;

    // reset signal model
    this.newSignal = {
      signalTypeCode: type,
      signalSubTypeCode: this.signalSubTypeSelected,
      riskClassificationCode: classification,
      description: this.findDescription(this.signalTypeSelected, 'CB_EarlyWarningSignalType')
    };
    this.newSignal.specificData = angular.copy(this.signalTypeModels[type]) || null;
    scope.createSignalForm.$setPristine(true);
    scope.createSignalForm.$setUntouched(true);
  }

  createSignal() {
    let invalidElement = document.querySelector("form[name='createSignalForm'] .ng-invalid");
    if (angular.isObject(invalidElement)) {
      invalidElement.focus();
      return;
    }

    angular.forEach(this.newSignal.specificData, (value, key) => {
      if (!value) delete this.newSignal.specificData[key];
    });
    if (!this.newSignal.note) delete this.newSignal.note;

    // TODO: full impl
    //errorsService.clear();
    this.clientSignalsService.addSignal(this.clientId, this.newSignal)
      .then((response) => {
        this.$state.go('tasks.private')
      })
      .catch(function () {
        // error logic
      });
  }
}

