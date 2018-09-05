import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractViewerComponent } from './contract-viewer.component';
import {CvHeaderModule} from './cv-header/cv-header.module';
import {CvBodyModule} from './cv-body/cv-body.module';

describe('ContractViewerComponent', () => {
  let component: ContractViewerComponent;
  let fixture: ComponentFixture<ContractViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CvHeaderModule,
        CvBodyModule,
      ],
      declarations: [ ContractViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
