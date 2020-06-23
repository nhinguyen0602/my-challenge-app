import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { Character } from '../shared/model/character';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterUrl = environment.apiUrl + "/books"

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

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.characterUrl).pipe(
      catchError(this.handleError<Character[]>('getCharacters'))
    )
  }
}
