export default class signals {
  /*@ngInject*/ constructor(fetch) {
    this.fetch = fetch;

    this.endPoint = '/signals';
  }
  
  getById(signalId) {
      return this.fetch.apply(`${this.endPoint}/${signalId}`, 'GET');
  }
}

