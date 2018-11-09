import { CoachModule } from './coach.module';

describe('CoachModule', () => {
  let coachModule: CoachModule;

  beforeEach(() => {
    coachModule = new CoachModule();
  });

  it('should create an instance', () => {
    expect(coachModule).toBeTruthy();
  });
});
