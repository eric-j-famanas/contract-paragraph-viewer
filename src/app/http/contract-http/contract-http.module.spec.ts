import { ContractHttpModule } from './contract-http.module';

describe('ContractHttpModule', () => {
  let contractHttpModule: ContractHttpModule;

  beforeEach(() => {
    contractHttpModule = new ContractHttpModule();
  });

  it('should create an instance', () => {
    expect(contractHttpModule).toBeTruthy();
  });
});
