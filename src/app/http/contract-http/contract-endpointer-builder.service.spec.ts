import { TestBed, inject } from '@angular/core/testing';

import { ContractEndpointerBuilderService } from './contract-endpointer-builder.service';

describe('ContractEndpointerBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractEndpointerBuilderService]
    });
  });

  it('should be created', inject([ContractEndpointerBuilderService], (service: ContractEndpointerBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
