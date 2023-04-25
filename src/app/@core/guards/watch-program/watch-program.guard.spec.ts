import { TestBed } from '@angular/core/testing';

import { WatchProgramGuard } from './watch-program.guard';

describe('WatchProgramGuard', () => {
  let guard: WatchProgramGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WatchProgramGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
