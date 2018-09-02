import { ContractViewerModule } from './contract-viewer.module';

describe('ContractViewerModule', () => {
  let contractViewerModule: ContractViewerModule;

  beforeEach(() => {
    contractViewerModule = new ContractViewerModule();
  });

  it('should create an instance', () => {
    expect(contractViewerModule).toBeTruthy();
  });
});
