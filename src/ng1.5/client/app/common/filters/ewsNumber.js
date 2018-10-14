import {formatNumber} from 'accounting';

export default /*@ngInject*/ function ewsNumber(appConf) {
  return function (value) {
    if (!value) return '-';
    
    let format = appConf.formats.number;

    return format ? formatNumber(value, format) : value;
  }
};
