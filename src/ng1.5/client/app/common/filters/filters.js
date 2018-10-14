import angular from 'angular';
import capitalize from './capitalize';
import ewsDate from './ewsDate';
import ewsDatetime from './ewsDatetime';
import ewsCurrency from './ewsCurrency';
import ewsCurrencyMillions from './ewsCurrencyMillions';
import space2br from './space2br';
import ewsFilter from './ewsFilter';
import ewsFloat from './ewsFloat';
import ewsNumber from './ewsNumber';
import ewsPercentage from './ewsPercentage';

export default angular
  .module('app.filters', [])
  .filter({
    capitalize,
    ewsDate,
    ewsDatetime,
    ewsCurrency,
    ewsCurrencyMillions,
    space2br,
    ewsFilter,
    ewsFloat,
    ewsNumber,
    ewsPercentage
  });
