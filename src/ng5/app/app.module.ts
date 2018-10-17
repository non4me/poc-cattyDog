import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { NoteElementComponent } from './components/note-element/note-element.component';
import { AppComponent } from './app.component';
import { phoneServiceProvider } from './notesApi.service';

declare var angular: any;

angular.module('demoApp')
  .directive(
    'noteElement',
    downgradeComponent({ component: NoteElementComponent })
  );

const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, 'i18/', '.json');


@NgModule({
  declarations: [
    AppComponent,
    NoteElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    UpgradeModule
  ],
  providers: [phoneServiceProvider],
  entryComponents: [NoteElementComponent],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
  // constructor(private upgrade: UpgradeModule) {
  // }
  //
  // ngDoBootstrap() {
  //   this.upgrade.bootstrap(document.body, ['demoApp']);
  // }
}
