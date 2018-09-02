import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractViewerComponent } from './contract-viewer.component';
import {CvBodyModule} from './cv-body/cv-body.module';
import {CvHeaderModule} from './cv-header/cv-header.module';

@NgModule({
  imports: [
    CommonModule,
    CvBodyModule,
    CvHeaderModule
  ],
  declarations: [ContractViewerComponent]
})
export class ContractViewerModule { }
