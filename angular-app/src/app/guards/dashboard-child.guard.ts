import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const dashboardChildGuard: CanActivateChildFn = (childRoute, state) => {
 
  const auth = inject(AuthService)

  if(auth.isLoggedIn()){
    return true
  }
 
  alert("Dashboard access denied!")

  return false;
};
