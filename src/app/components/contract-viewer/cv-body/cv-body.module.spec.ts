import { CvBodyModule } from './cv-body.module';

describe('CvBodyModule', () => {
  let cvBodyModule: CvBodyModule;

  beforeEach(() => {
    cvBodyModule = new CvBodyModule();
  });

  it('should create an instance', () => {
    expect(cvBodyModule).toBeTruthy();
  });
});
