export default class search {
  /*@ngInject*/ constructor(fetch) {
    this.fetch = fetch;

    this.endPoint = '/search';
  }

  getPO(data) {
    return this.fetch.apply(`/clients${this.endPoint}`, 'POST', data);
  }

  getESSO(data) {
    return this.fetch.apply(`/essogroups${this.endPoint}`, 'POST', data);
  }
}

