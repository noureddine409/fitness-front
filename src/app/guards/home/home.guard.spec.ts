import { TestBed } from '@angular/core/testing';

import { HomeGuard } from './home.guard';

describe('ProfileGuard', () => {
  let guard: HomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
