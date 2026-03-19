import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { log } from 'console';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService)
  // console.log(auth.loadUser());
  // console.log(auth.userSubject.value)

  // if(auth.userSubject.value){
  //   return true
  // }

  // auth.users.pipe(
  //   take(1),
  //   switchMap(user=>{
  //     console.log(user)
  //     return user
  //   })
  // )
  return auth.users.pipe(take(1),switchMap(user=>{
    if(user) return of(true)
    return auth.loadUser().pipe(map(user=> !!user))
  }));

  return true
};
