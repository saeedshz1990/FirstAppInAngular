import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkCredentialGuard } from './check-credential.guard';

describe('checkCredentialGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkCredentialGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
