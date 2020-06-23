import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../shared/model/book';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = environment.apiUrl + "/books"

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.alertService.error(`${operation} failed: ${error.alertService}`);
      return of(result as T);
    }
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl).pipe(
      catchError(this.handleError<Book[]>('getBooks'))
    )
  }


}
