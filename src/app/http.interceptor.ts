import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {catchError, EMPTY, Observable, throwError} from "rxjs";

export const httpInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const apiKey = `781f3c9f53499aa42172990e3f91016e`;
  const reqWithParams = req.clone({
    params: req.params.set('appid', apiKey)
  });
  return next(reqWithParams).pipe(
    catchError((error: HttpErrorResponse) => {
      alert('Error:' + error.error.cod + ' ' + error.error.message);
      return EMPTY;
      // throwError(() => error);
    })
  );
};
