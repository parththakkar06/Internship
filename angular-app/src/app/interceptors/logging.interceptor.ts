import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("Request URL : ",req.url);
  console.log("Request Method : ",req.method);

  return next(req);
};
