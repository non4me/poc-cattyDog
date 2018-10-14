import {formatMoney} from 'accounting';

module.exports = /*@ngInject*/ function (appConf) {
  return function (value, currencySymbol) {
    if (!value) return '-';

    let format = appConf.formats.currency;
    if (format && currencySymbol) {
      format = angular.extend(format, { symbol: currencySymbol})
    }

    return format ? formatMoney(value/1000000.0, format) : value;
  }
};
