import { CvParagraphModule } from './cv-paragraph.module';

describe('CvParagraphModule', () => {
  let cvParagraphModule: CvParagraphModule;

  beforeEach(() => {
    cvParagraphModule = new CvParagraphModule();
  });

  it('should create an instance', () => {
    expect(cvParagraphModule).toBeTruthy();
  });
});
