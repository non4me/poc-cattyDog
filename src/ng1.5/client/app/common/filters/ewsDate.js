'use strict';

export default /*@ngInject*/ function ewsDate(appConf, $filter) {
  return function (value) {
    return $filter('date')(value, appConf.formats.date);
  }
};
