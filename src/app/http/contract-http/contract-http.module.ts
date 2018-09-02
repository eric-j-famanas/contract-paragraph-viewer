import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ContractHttpService} from './contract-http.service';
import {ContractEndpointBuilderService} from './contract-endpoint-builder.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    ContractHttpService,
    ContractEndpointBuilderService,
    {
      provide: 'trApiEndpoint',
      useValue: 'http://localhost:3000/api/'   // TODO: This should be a token
    }
  ]
})
export class ContractHttpModule {
}
