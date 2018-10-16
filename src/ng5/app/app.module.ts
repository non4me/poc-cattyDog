import { BrowserModule } from '@angular/platform-browser';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

declare var angular: any;

angular.module('demoApp')
  .directive(
    'ng2Demo',
    downgradeComponent({component: AppComponent})
  );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  entryComponents: [AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['demoApp']);
  }
}
