export default class TablePaginationController {
  /*@ngInject*/
  constructor($scope, $state, appConf) {
    this.name = 'tablePagination';
    this.$state = $state;

    this.limits = [10, 20, 50, 100];
    this.totalElements = 7;

    this.pageSize = parseInt(window.sessionStorage.getItem('pageSize'), 10) || appConf.DEFAULT_PAGE_SIZE || 20;
    this.totalItems = this.rawDataIn && this.rawDataIn.length;
    this.maxPage = this.totalItems ? Math.ceil(this.totalItems / this.pageSize) : 1;


    this.currentPage = 1;
    if (window.history.state && window.history.state.page) {
      window.history.state.page = 1;
    }
    let locationChangeStart =  $scope.$on('$locationChangeStart', (event, next, current) => {
      if (window.history.state && window.history.state.page) {
        this.currentPage = window.history.state.page;
        this.setOutData();
      }
    });
    $scope.$on('$destroy', locationChangeStart);

    (this.createPagination = () => {
      const count = this.maxPage || 1;
      this.pages = [];

      for (let i = 1; i <= count; i++) {
        let shift = 0;

        // shift page number if value more then average
        if (this.currentPage > Math.ceil(this.totalElements / 2)) {
          shift = this.currentPage - Math.floor(this.totalElements / 2);
          if ((shift + i) > this.maxPage) {
            break;
          }
        }

        if (i > this.totalElements - 2 && this.maxPage > this.totalElements) {
          this.averageMaxPage = Math.ceil((this.currentPage + this.maxPage) / 2);
          if (this.averageMaxPage < this.currentPage + 3) {
            this.averageMaxPage = this.maxPage;
          }

          this.averageMinPage = Math.ceil((this.currentPage) / 2);
          if (this.averageMinPage < this.totalElements - 2) {
            this.averageMinPage = 2;
          }

          break;
        }

        this.pages.push({value: shift + i});
      }
    })(this.maxPage);

    this.sortFn = (list = []) => {
      if (this.sort && this.sort.by) {
        list.sort((a, b) => {
          const by = this.sort.by;
          let aValue, bValue;

          if (angular.isObject(a[by])) { //codebooks
            aValue = a[by].code;
            bValue = b[by].code;
          }
          else if (+a[by]) { // number
            aValue = +a[by];
            bValue = +b[by];
          }
          else { // string
            aValue = a[by].toString().trim();
            bValue = b[by].toString().trim();
          }

          if (aValue === bValue) return 0;
          if (aValue > bValue) {
            return this.sort.acs ? 1 : -1;
          }
          else {
            return this.sort.acs ? -1 : 1;
          }
        });
      }

      return list;
    };

    this.setOutData = () => {
      let fromRecord = ((this.currentPage - 1) * this.pageSize);
      let toRecord = fromRecord + this.pageSize;

      this.sortedData = this.sortFn(this.rawDataIn);

      this.tableDataOut = this.sortedData.slice(fromRecord, toRecord);

      $scope.$emit('paginationChanged', {
        page: this.currentPage,
        size: this.pageSize
      });
    };

    $scope.$watch(() => {
      return this.sort;
    }, () => {
      this.setOutData()
    }, true);
  }

  setPage(page) {
    if (page && (this.currentPage !== page)) {
      this.currentPage = page;
      window.history.pushState({page}, page, window.location.href);
      this.setOutData();
    }
  };

  nextPage() {
    if (this.currentPage < this.maxPage) {
      this.setPage(this.currentPage + 1);
    }
  };

  prevPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  };

  setLimit(limit = 10) {
    window.sessionStorage.setItem('pageSize', limit);
    this.pageSize = limit;
    this.maxPage = this.totalItems ? Math.ceil(this.totalItems / this.pageSize) : 1;
    this.setPage(1);
    this.createPagination();
    this.setOutData();
  }
}

