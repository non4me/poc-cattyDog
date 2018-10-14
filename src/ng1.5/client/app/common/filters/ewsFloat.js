import {formatNumber} from 'accounting';

export default /*@ngInject*/ function ewsFloat (appConf) {
  return function (value) {
    if (!value) return '-';

    let format = appConf.float;
    return format ? formatNumber(value, format) : value;
  }
};
