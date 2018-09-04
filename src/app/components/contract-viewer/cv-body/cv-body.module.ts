import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CvBodyComponent} from './cv-body.component';
import {CvParagraphModule} from './cv-paragraph/cv-paragraph.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    CvParagraphModule,
    InfiniteScrollModule,
  ],
  declarations: [
    CvBodyComponent
  ],
  exports: [
    CvBodyComponent
  ]
})
export class CvBodyModule {
}
