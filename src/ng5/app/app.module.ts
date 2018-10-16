import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NoteElementComponent } from './components/note-element/note-element.component';

declare var angular: any;

angular.module('demoApp')
  .directive(
    'noteElement',
    downgradeComponent({ component: NoteElementComponent })
  );

const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, 'i18/', '.json');


@NgModule({
  declarations: [
    NoteElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    UpgradeModule
  ],
  providers: [],
  entryComponents: [NoteElementComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['demoApp']);
  }
}
