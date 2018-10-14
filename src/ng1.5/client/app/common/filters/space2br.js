export default /*@ngInject*/ function space2br ($sce) {
  return function (value) {
    if (!value) return '';

    return $sce.trustAsHtml(value.replace(/ /g, '<br/>'));
  };
};
