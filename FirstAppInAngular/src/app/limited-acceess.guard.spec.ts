import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { LimitedAccessGuard } from './limited-access.guard';

describe('limitedAcceessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => LimitedAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
