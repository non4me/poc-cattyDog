export default class CodeBooks {
  /*@ngInject*/ constructor(fetch) {
    this.fetch = fetch;

    this.books = [
      'codebookName=CB_RiskClassification',
      'codebookName=CB_EarlyWarningSignalType',
      'codebookName=CB_EarlyWarningSignalSubType',
      'codebookName=CB_EarlyWarningSignalStatus',
      'codebookName=CB_FscsClientRating',
      'codebookName=CB_D4Sector',
      'codebookName=CB_EwsDetectionMethod',
      'codebookName=CB_AccountReservationType',
      'codebookName=CB_TaskType',
      'codebookName=CB_TaskStatus',
      'codebookName=CB_EwsProcessRole',
      'codebookName=CB_CMTContractualTermType',
      'codebookName=CB_AlertCategory',
      'codebookName=CB_ClientAlertType'
    ];
    this.endPoint = '/codebooks?' + this.books.join('&');
  }

  getAll() {
    return this.fetch.apply(this.endPoint, 'GET');
  };
}
