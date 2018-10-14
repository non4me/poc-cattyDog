export default class history {
  /*@ngInject*/ constructor(fetch) {
    this.fetch = fetch;

    this.endPoint = '/history';
  }

  getById(id) {
    if(id) {
      return this.fetch.apply(`/clients/${id}${this.endPoint}`, 'GET');
    }
  }

  addNote(id, text) {
    return this.fetch.apply(`/clients/${id}${this.endPoint}`, 'POST', {note: text});
  }
}

