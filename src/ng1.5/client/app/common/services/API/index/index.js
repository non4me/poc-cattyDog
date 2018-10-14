export default class index {
  /*@ngInject*/ constructor(fetch) {
    this.fetch = fetch;

    this.endPoint = '/index';
  }

  getAll() {
    return this.fetch.apply(this.endPoint, 'GET');
  };
}
