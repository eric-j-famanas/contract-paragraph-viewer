import { TestBed, inject } from '@angular/core/testing';

import { ContractDataStateService } from './contract-data-state.service';

describe('ContractDataStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractDataStateService]
    });
  });

  it('should be created', inject([ContractDataStateService], (service: ContractDataStateService) => {
    expect(service).toBeTruthy();
  }));
});
