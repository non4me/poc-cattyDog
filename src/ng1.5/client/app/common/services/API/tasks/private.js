export default class tasksPrivate {
  /*@ngInject*/ constructor($httpParamSerializer, fetch) {
    this.fetch = fetch;
    this.$httpParamSerializer = $httpParamSerializer;

    this.endPoint = '/private';
  }

  getList(params) {
    const serilizedParams = this.$httpParamSerializer(params);
    return this.fetch.apply(`/tasks${this.endPoint}/search` + (serilizedParams ? '?'+ serilizedParams : ''));
  };
}

