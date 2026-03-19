import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, of, switchMap, take } from 'rxjs';

export const guestGuard: CanActivateFn = (route, state) => {
  
  const auth = inject(AuthService)
  const router = inject(Router)
  
  return auth.users.pipe(
    take(1),
    switchMap(user=>{
      if(user){
        router.navigate(['/home'])
        return of(false)
      }
      return auth.loadUser().pipe(
        map(user=>{
          if(user){
            router.navigate(['/home'])
            return false
          }
          return true
        })
      )
    })
  )
};
