import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBodyComponent } from './cv-body.component';
import {CvParagraphModule} from './cv-paragraph/cv-paragraph.module';

describe('CvBodyComponent', () => {
  let component: CvBodyComponent;
  let fixture: ComponentFixture<CvBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CvParagraphModule
      ],
      declarations: [ CvBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
