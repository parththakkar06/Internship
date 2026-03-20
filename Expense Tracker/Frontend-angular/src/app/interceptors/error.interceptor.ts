import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req:any, next:any) => {
  

  
  return next.handle(req).pipe(
    catchError((error:any)=>{

      let errorMessage = 'Something went wrong'
      
      // if(error.status === 404){
      //   alert("API NOT FOUND")
      //   console.log("hrer")
      // }

      if(error.status === 401 && req.url.includes('user/me')){
        console.log(".....im here")
        return throwError(()=>null)
      }

      if(error.error && error.error.message){
        errorMessage = error.error.message
      }else if(error.status === 0){
        errorMessage = 'Server Not Reachable'
      }else if(error.status === 401){
        errorMessage = 'Unauthorized'
      }

      // if(error.status === 500){
      //   alert("Server Error")
      // }

      return throwError(()=>errorMessage)
    })
  );
};
