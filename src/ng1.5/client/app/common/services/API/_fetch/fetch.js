export default class Fetch {
  /*@ngInject*/ constructor($http, $q, appConf, mockService) {
    this.$http = $http;
    this.$q = $q;
    this.appConf = appConf;

    this.data = {};
    this.lastModified = {};
    this.cacheTime = 10; //3sec
  }

  apply(url, method, data) {
    return this._fetch(this.appConf.apiPrefix + url, method, data);
  };

  _fetch(url, method = 'POST', data = null, headers = {}) {
    let _this = this;
    const deferred = _this.$q.defer();
    const actualTime = (new Date()).getTime();

    if (!this.data[url] || (actualTime > this.lastModified[url])) {
      //console.log('fetch:', url);
      _this.$http({method, url, headers, data})
        .then(resp => {
          let headers = resp.headers();
          if (headers && headers.location) {
            _this.$http({method: headers.allow = 'GET', url: headers.location})
              .then((resp) => {
                _this.lastModified[url] = (new Date()).getTime() + _this.cacheTime;
                _this.data[url] = resp.data;
                deferred.resolve(resp.data);
              })
              .catch((error) => {
                deferred.reject(error);
              });
            return;
          }
          _this.lastModified[url] = (new Date()).getTime() + _this.cacheTime;
          _this.data[url] = resp.data;
          deferred.resolve(resp.data);
        })
        .catch(function (error) {
          deferred.reject(error);
        });
    }
    else {
      deferred.resolve(this.data[url]);
    }

    return deferred.promise;
  };
}

