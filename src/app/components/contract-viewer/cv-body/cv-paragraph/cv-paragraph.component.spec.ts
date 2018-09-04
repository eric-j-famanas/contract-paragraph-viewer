import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvParagraphComponent } from './cv-paragraph.component';

describe('CvParagraphComponent', () => {
  let component: CvParagraphComponent;
  let fixture: ComponentFixture<CvParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
