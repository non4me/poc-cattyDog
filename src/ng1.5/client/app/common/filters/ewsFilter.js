'use strict';

export default /*@ngInject*/ function ewsFilter($filter) {
  return function (value, filterName) {
    return $filter(filterName)(value);
  };
};
