import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req:any, next:any) => {

  const loader = inject(LoaderService)

  loader.show()

  return next(req).pipe(
    finalize(()=>loader.hide())
  );
};
