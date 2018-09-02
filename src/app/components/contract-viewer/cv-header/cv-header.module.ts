import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CvHeaderComponent} from './cv-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CvHeaderComponent
  ],
  exports: [
    CvHeaderComponent
  ]
})
export class CvHeaderModule {
}
