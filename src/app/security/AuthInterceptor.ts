import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('token');

    if (accessToken) {
      const cloned = req.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`,
           'Access-Control-Allow-Origin' : 'http://localhost:4200'
        },
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }

}
