import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../shared/model/book';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public bookUrl = environment.apiUrl + `/books/`;

  constructor(
    private http: HttpClient,
  ) {
  }


  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl).pipe(map(res => res));
  }

  getBookDetail(url: string): Observable<Book> {
    return this.http.get<Book>(url).pipe(map(res => res));
  }


}
