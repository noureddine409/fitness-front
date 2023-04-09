import { TestBed } from '@angular/core/testing';

import { CompleteProfileGuard } from './complete-profile.guard';

describe('CompleteProfileGuard', () => {
  let guard: CompleteProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompleteProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
