export default class EwsSpecificDataController {
  /*@ngInject*/ constructor(codebooksService) {
    this.name = 'ewsSpecificData';

    this.template = this.template || 'default';
    codebooksService.getAll().then((codebooks) => {
      this.codebooks = codebooks;
    })
  }
}

