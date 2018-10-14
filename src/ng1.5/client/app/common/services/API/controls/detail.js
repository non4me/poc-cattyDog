export default class clients {
  /*@ngInject*/ constructor(fetch) {
    this.fetch = fetch;

    this.endPoint = '/controls';
  }

  getList() {
    return this.fetch.apply(this.endPoint);
  };

  getById(clientId) {
    if(clientId) {
      return this.fetch.apply(`${this.endPoint}/${clientId}`, 'GET');
    }
  }
}

