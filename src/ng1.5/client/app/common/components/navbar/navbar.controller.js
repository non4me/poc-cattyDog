export default class NavbarController {
  /*@ngInject*/ constructor(appConf, indexService) {
    this.name = 'navbar';
    this.appConf = appConf;

    this.activePill = 'tasks';
    this.navPills = [
      {id: 'tasks', label: 'Úkoly', order: 1},
      {id: 'clients', label: 'Klienti', order: 2},
      {id: 'products', label: 'Produkty', order: 3},
      {id: 'controls', label: 'Kontroly', order: 4},
      {id: 'signals', label: 'Signály', order: 5}
    ];

    this.data = {};
    indexService.getAll()
      .then((data) => {
        this.data = data;
      });
  }

  isAllowed(rights){
    // if(this.appConf.user && this.appConf.user.rights.main) {
    //   return this.appConf.user.rights.main.indexOf(rights) > -1;
    // }
    // return false;
    return true;
  }
}

