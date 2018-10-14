export default class TableDataPresenterController {
  constructor($parse) {
    'ngInject';
    this.name = 'dataPresenter';
    this.$parse = $parse;
  }

  getCodebookValue (data, attr, valueFrom) {
    var from = valueFrom || 'displayValue';
    var codebookValue = this.$parse(attr)(data);
    if (codebookValue !== null) {
      return codebookValue[from];
    }
    return null;
  };

  getType(column, record) {
    if (column.type == 'link') {
      return record._links && record._links[column.linkMap] ? 'link' : 'text';
    }
    return column.type;
  };

  getValue(data, attr) {
    return this.$parse(attr)(data);
  };
}

TableDataPresenterController.$inject = ['$parse'];
