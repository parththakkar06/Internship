import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // const token = localStorage.getItem("token")

  const router = inject(Router)
  const auth = inject(AuthService)

  // if(token){
  //   return true
  // }

  // alert("You must login first!")
  // router.navigate(['/login'])

  if(auth.isLoggedIn()){
    return true
  }

  return router.createUrlTree(['/login']);
};
