import { ContractHttpModule } from './contract-http.module';
import {async, TestBed} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

describe('ContractHttpModule', () => {
  let contractHttpModule: ContractHttpModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
      ],
      declarations: [
        AppComponent
      ],
    });
  }));

  beforeEach(() => {
    contractHttpModule = new ContractHttpModule();
  });

  it('should create an instance', () => {
    expect(contractHttpModule).toBeTruthy();
  });
});
