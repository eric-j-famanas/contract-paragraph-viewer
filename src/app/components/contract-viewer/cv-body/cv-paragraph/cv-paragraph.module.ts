import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CvParagraphComponent} from './cv-paragraph.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CvParagraphComponent
  ],
  declarations: [
    CvParagraphComponent
  ]
})
export class CvParagraphModule {
}
