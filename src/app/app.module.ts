import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContractHttpModule} from './http/contract-http/contract-http.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContractHttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
