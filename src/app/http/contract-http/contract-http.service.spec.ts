import {TestBed, inject} from '@angular/core/testing';
import {ContractHttpService} from './contract-http.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

// TODO: Fix unit tests
xdescribe('ContractHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        ContractHttpService,
      ]
    });
  });

  it('should be created', inject([ContractHttpService, HttpTestingController], (service: ContractHttpService, backend: HttpTestingController) => {
    expect(service).toBeTruthy();
  }));
});
