export default class ClientHistoryController {
  constructor(appConf, clientHistoryService, $stateParams) {
    this.name = 'clientHistory';
    this.clientHistoryService = clientHistoryService;
    this.clientId = $stateParams.clientId;

    this.note = "";
    this.noteMinLength = appConf.MIN_CLIENT_NOTE_LENGTH;
    this.noteMaxLength = appConf.MAX_CLIENT_NOTE_LENGTH;

    this.tableHeader =
      [
        {name: 'created', type: 'datetime', headerClass:'datetime', columnName: 'Datum'},
        {name: 'user', type: 'columnGroup', groupItems: ['firstname', 'surname'], headerClass: 'name', columnName: 'Uživatel'},
        {name: 'organizationUnitDisplayName', headerClass: 'orgUnitName', cellClass: 'one-line', columnName: 'Útvar'},
        {name: 'note', type: 'note', columnName: 'Poznámka'}

      ];

    clientHistoryService.getById(this.clientId)
      .then((data) => {
        if (typeof data === 'object') {
          this.data = data;
        }
      })
  }

  addNote(scope) {
    if (scope.clientNoteForm.$invalid) {
      $('ng-form[name="clientNoteForm"] .ng-invalid:first').focus();
      return;
    }

    if (this.clientId && this.note) {
      this.clientHistoryService.addNote(this.clientId, this.note)
        .then((data) => {
          if (typeof data === 'object') {
            this.data = data;
          }
        })
    }
    else {
      throw new Error(`Not exists clientId or note`);
    }
  }
}

ClientHistoryController.$inject = ['appConf', 'clientHistoryService', '$stateParams'];
