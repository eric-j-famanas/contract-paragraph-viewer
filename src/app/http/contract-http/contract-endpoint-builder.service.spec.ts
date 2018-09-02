import {TestBed, inject} from '@angular/core/testing';

import {ContractEndpointBuilderService} from './contract-endpoint-builder.service';

describe('ContractEndpointBuilderService', () => {
  const apiEndpoint = 'http://mockEndpoint:3000/';
  const apiEndpointToken = {
    provide: 'trApiEndpoint',
    useValue: apiEndpoint
  };

  let contractEndpointBuilderService: ContractEndpointBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContractEndpointBuilderService,
        apiEndpointToken
      ]
    });

    contractEndpointBuilderService = new ContractEndpointBuilderService(apiEndpoint);
  });

  it('should be created',
    inject([ContractEndpointBuilderService], (service: ContractEndpointBuilderService) => {
      expect(service).toBeTruthy();
    }));

  it('should know what which api endpoint it is responsible for',
    inject([ContractEndpointBuilderService], (service: ContractEndpointBuilderService) => {
      expect(service.apiEndpoint).toEqual(apiEndpoint + 'contracts/');
    }));

  it('should correctly build the getAll endpoint',
    inject([ContractEndpointBuilderService], (service: ContractEndpointBuilderService) => {
      expect(service.getAllContracts()).toEqual(service.apiEndpoint);
    }));

  it('should correctly build the get/:id endpoint',
    inject([ContractEndpointBuilderService], (service: ContractEndpointBuilderService) => {
      const id = '12345';

      expect(service.getContractIdEndpoint(id)).toEqual(service.apiEndpoint + id);
    }));

  it('should correctly build the get/:id/paragraphs endpoint',
    inject([ContractEndpointBuilderService], (service: ContractEndpointBuilderService) => {
      const id = 'abcdefg';

      expect(service.getParagraphsNoPagesEndpoint(id)).toEqual(service.apiEndpoint + id + '/paragraphs');
    }));

  it('should correctly build the get/:id/paragraphs?pages param endpoint',
    inject([ContractEndpointBuilderService], (service: ContractEndpointBuilderService) => {
      const id = '0011011101';
      const pages = 123;

      expect(service.getParagraphsWithPagesEndpoint(id, pages)).toEqual(`${service.apiEndpoint}${id}/paragraphs?page=${pages}`);
    }));
});
