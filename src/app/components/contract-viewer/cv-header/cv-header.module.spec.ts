import { CvHeaderModule } from './cv-header.module';

describe('CvHeaderModule', () => {
  let cvHeaderModule: CvHeaderModule;

  beforeEach(() => {
    cvHeaderModule = new CvHeaderModule();
  });

  it('should create an instance', () => {
    expect(cvHeaderModule).toBeTruthy();
  });
});
