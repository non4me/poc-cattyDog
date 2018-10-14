export default class clients {
  /*@ngInject*/ constructor(fetch) {
    this.fetch = fetch;

    this.endPoint = '/essogroups';
  }

  getById(groupId) {
    if(groupId) {
      return this.fetch.apply(`${this.endPoint}/${groupId}`, 'GET');
    }
  }
}

