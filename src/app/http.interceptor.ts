import {HttpErrorResponse, HttpEvent, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from "rxjs";

export const httpInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  return next(req).pipe(
    tap(event => {
      if (event.type == HttpEventType.Response) {
        console.log(req.url, 'returned a response with status', (event).status);
      }
    }),
    // catchError((error: HttpErrorResponse) => {
    //   alert('Error:' + error.error.cod + ' ' + error.error.message);
    //   return throwError(() => error);
    // })
  );

};



