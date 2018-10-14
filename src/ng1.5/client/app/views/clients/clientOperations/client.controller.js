export default class ClientController {
  constructor(clientDetailsService, $stateParams) {
    'ngInject';
    this.name = 'client';

    this.clientId = $stateParams.clientId;
    this.tabs = [
      {id: 'clients.id.details', label: 'Detail klienta', order: 1},
      {id: 'clients.id.products', label: 'Produkty', order: 2},
      {id: 'clients.id.controls', label: 'Kontroly', order: 3},
      {id: 'clients.id.signals', label: 'Signály', order: 4},
      {id: 'clients.id.history', label: 'Historie', order: 5}
    ];

    if ($stateParams.clientId) {
      clientDetailsService.getById($stateParams.clientId).then((data) => {
        this.data = data;
      });
    }
  }
}

ClientController.$inject = ['clientDetailsService', '$stateParams'];
