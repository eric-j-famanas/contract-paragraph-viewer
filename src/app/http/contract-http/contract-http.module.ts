import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ContractHttpService} from './contract-http.service';
import {ContractEndpointerBuilderService} from './contract-endpointer-builder.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    ContractHttpService,
    ContractEndpointerBuilderService,
    {
      provide: 'trServerUri',
      useValue: 'http://localhost:3000/contracts'   // TODO: This should be a token
    }
  ]
})
export class ContractHttpModule {
}
