import angular from 'angular';
import Tasks from './tasks/tasks';
import Clients from './clients/clients';
import Products from './products/products';
import Controls from './controls/controls';
import Signals from './signals/signals';

let viewsModule = angular.module('app.views', [
  Tasks.name,
  Clients.name,
  Products.name,
  Controls.name,
  Signals.name
]);

export default viewsModule;
