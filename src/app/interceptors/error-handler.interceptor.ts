import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { AlertService } from '../service/alert.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private alertService: AlertService,
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(this.handleError<any>('error')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.alertService.error(`${operation} failed: ${error.alertService}`);
      return of(result as T);
    };
  }

}
