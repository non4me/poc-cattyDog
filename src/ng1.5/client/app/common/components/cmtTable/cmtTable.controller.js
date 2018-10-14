export default class CmtTableController {
  /*@ngInject*/ constructor($state) {
    this.name = 'cmtTable';
    this.$state = $state;

    this.hidePagination = this.hidePagination === 'true';
    this.hideFilter = this.hideFilter === 'true';
    this.tableEmpty = this.tableEmpty || 'Dle zadaných kriterií vyhledávání se nepodařilo nalézt žádný záznam.';

    this.currentDate = new Date();
    this.sort = {
      by: this.defaultSort || null,
      acs: true
    };
    this.sortDerection = {};
  };

  //TODO: impl sortBy in cmtTable
  sortBy(column){
    if(column && column.name && column.sort) {
      this.sortDerection[column.name] = !this.sortDerection[column.name];

      this.sort = {
        by: column.name,
        acs: this.sortDerection[column.name]
      };
    }
  }

  getRecordClass(record) {
    if (record.dueDate) {
      if (new Date(record.dueDate) < this.currentDate) {
        record.class = 'invalid';
      }
    }
    if (this.$state.current.name === "tasks.common" && record.taskStatus && record.taskStatus.code === '3') {
      record.class += ' grey';
    }

    return record.class;
  }
}

