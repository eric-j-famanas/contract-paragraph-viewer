import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractViewerComponent} from './contract-viewer.component';
import {CvBodyModule} from './cv-body/cv-body.module';
import {CvHeaderModule} from './cv-header/cv-header.module';
import {BaseHttpService} from '../../http/base-http.service';
import {ContractHttpService} from '../../http/contract-http/contract-http.service';
import {BaseStateService} from '../../state-providers/base-state.service';
import {ContractDataStateService} from '../../state-providers/contracts/contract-data-state.service';
import {ContractHttpModule} from '../../http/contract-http/contract-http.module';

@NgModule({
  imports: [
    CommonModule,
    ContractHttpModule,
    CvBodyModule,
    CvHeaderModule,
  ],
  declarations: [
    ContractViewerComponent
  ],
  exports: [
    ContractViewerComponent,
  ],
  providers: [
    {
      provide: BaseHttpService,
      useClass: ContractHttpService,
    },
    {
      provide: BaseStateService,
      useClass: ContractDataStateService,
    }
  ]
})
export class ContractViewerModule {
}
