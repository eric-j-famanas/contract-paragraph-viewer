import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContractHttpModule} from './http/contract-http/contract-http.module';
import {ContractViewerModule} from './components/contract-viewer/contract-viewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContractViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
