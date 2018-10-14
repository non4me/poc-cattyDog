export default class history {
  /*@ngInject*/ constructor(fetch) {
    this.fetch = fetch;

    this.endPoint = '/signals';
  }

  addSignal(clientId, data){
    return this.fetch.apply(`/clients/${clientId}${this.endPoint}/+`, 'POST', data);
  }

  getById(clientId) {
      return this.fetch.apply(`/clients/${clientId}${this.endPoint}`, 'GET');
  }
}

