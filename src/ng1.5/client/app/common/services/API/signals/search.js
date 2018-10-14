export default class search {
  /*@ngInject*/ constructor(fetch) {
    this.fetch = fetch;

    this.endPoint = '/search';
  }

  getList(data) {
    return this.fetch.apply(`/signals${this.endPoint}`, 'POST', data);
  }
}

