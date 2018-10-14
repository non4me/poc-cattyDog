import {formatNumber} from 'accounting';

export default /*@ngInject*/ function ewsPercentage (appConf) {
  return function (value, showSymbol) {
    if (!value) return '-';
    
    let format = appConf.formats.percentage;
    if (format) {
      return showSymbol ? formatNumber(value, format) +' '+ format.symbol : formatNumber(value, format);
    }
    return value;
  }
};
