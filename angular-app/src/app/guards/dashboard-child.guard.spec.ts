import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { dashboardChildGuard } from './dashboard-child.guard';

describe('dashboardChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dashboardChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
