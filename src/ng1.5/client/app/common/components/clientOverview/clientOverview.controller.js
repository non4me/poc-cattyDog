// TODO: implement controller with full functionality

export default class ClientOverviewController {
  /*@ngInject*/ constructor($state) {
    this.name = 'clientOverview';

    this.$state = $state;
  }

  refreshData() {
    this.$state.reload();
  }
}

