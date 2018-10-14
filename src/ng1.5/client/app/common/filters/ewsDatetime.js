'use strict';

export default function /*@ngInject*/ ewsDate(appConf, $filter) {
  return function (value) {
    return appConf.formats.datetime ? $filter('date')(value, appConf.formats.datetime) : value;
  }
};
