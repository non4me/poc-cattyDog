const router = /*@ngInject*/ ($urlRouterProvider, $stateProvider) => {

  $urlRouterProvider.otherwise('/tasks/private');

  $stateProvider

    // Tasks
    .state('tasks', {
      url: '/tasks',
      template: '<tasks></tasks>',
      deepStateRedirect: { default: {state: 'tasks.private'}, params: true }
    })
    .state('tasks.private', {
      url: '/private',
      template: '<tasks-private></tasks-private>'
    })
    .state('tasks.common', {
      url: '/common',
      template: '<tasks-common></tasks-common>'
    })
    .state('tasks.planned', {
      url: '/planned',
      template: '<tasks-planned></tasks-planned>'
    })

    //Clients
    .state('clients', {
      url: '/clients',
      template: '<ui-view>',
      deepStateRedirect: { default: {state: 'clients.search'}, params: true}
    })

      .state('clients.search', {
        url: '/search',
        template: '<client-search></client-search>'
      })

      .state('clients.esso', {
        url: '/esso/:groupId',
        template: '<client-esso-group></client-esso-group>'
      })

      .state('clients.addSignal', {
        url: '/:clientId/add-signal',
        template: '<client-add-signal></client-add-signal>'
      })

      .state('clients.id', {
        abstract: true,
        url: '/id',
        template: '<client></client>'
      })
        .state('clients.id.details', {
          url: '/:clientId/details',
          template: '<client-details></client-details>'
        })
        .state('clients.id.products', {
          url: '/:clientId/products}',
          template: '<client-products></client-products>'
        })
        .state('clients.id.controls', {
          url: '/:clientId/controls}',
          template: '<client-controls></client-controls>'
        })
        .state('clients.id.signals', {
          url: '/:clientId/signals}',
          template: '<client-signals></client-signals>'
        })
        .state('clients.id.history', {
          url: '/:clientId/history}',
          template: '<client-history></client-history>'
        })

    //Signals
    .state('signals', {
      url: '/signals',
      template: '<ui-view>',
      deepStateRedirect: { default: {state: 'signals.search'}, params: true}
    })
      .state('signals.search', {
        url: '/search/:signalId',
        template: '<signals-search></signals-search>'
      })
      .state('signals.detail', {
        url: '/:signalId/detail',
        template: '<signal-details></signal-details>'
      })

    //Porducts
    .state('products', {
      url: '/products',
      template: '<ui-view>',
      deepStateRedirect: { default: {state: 'products.search'}, params: true}
    })
      .state('products.search', {
        url: '/search/:signalId',
        template: '<products-search></products-search>'
      })

    //Controls
    .state('controls', {
      url: '/controls',
      template: '<ui-view>',
      deepStateRedirect: { default: {state: 'controls.search'}, params: true}
    })
      .state('controls.search', {
        url: '/search/:signalId',
        template: '<controls-search></controls-search>'
      })
      .state('controls.detail', {
        url: '/detail', ///:controlId
        template: '<controls-detail></controls-detail>'
      })
};

export default router
