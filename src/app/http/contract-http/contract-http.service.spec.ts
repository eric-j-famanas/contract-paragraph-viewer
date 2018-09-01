import { TestBed, inject } from '@angular/core/testing';

import { ContractHttpService } from './contract-http.service';

describe('ContractHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractHttpService]
    });
  });

  it('should be created', inject([ContractHttpService], (service: ContractHttpService) => {
    expect(service).toBeTruthy();
  }));
});
