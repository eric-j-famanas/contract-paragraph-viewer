import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContractViewerModule} from './components/contract-viewer/contract-viewer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContractViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
