import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req:any, next:any) => {
  

  
  return next(req).pipe(
    catchError((error:any)=>{

      console.log("Interceptor working : err .. ",error);
      
      if(error.status === 404){
        alert("API NOT FOUND")
        console.log("hrer")
      }

      if(error.status === 500){
        alert("Server Error")
      }

      return throwError(()=>error)
    })
  );
};
