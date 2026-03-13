import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanMatchFn = (route, segments) => {

  const auth = inject(AuthService)
  const router = inject(Router)

  if(auth.getRole() === "admin"){
    return true
  }

  return router.createUrlTree(['/dashboard']);
};
