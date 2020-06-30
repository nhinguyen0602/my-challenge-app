import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { Character } from '../shared/model/character';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public characterUrl = environment.apiUrl + '/characters/';

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.alertService.error(`${operation} failed: ${error.alertService}`);
      return of(result as T);
    };
  }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.characterUrl).pipe(map(res => {
      if (!res){
        throw new Error('Value expected!');
      }
      return res;
    }),
    catchError(this.handleError<Character[]>('getCharacters'))
    );
  }

  getCharacter(url: string): Observable<Character> {
    return this.http.get<Character>(url).pipe(
      catchError(this.handleError<Character>('getCharacter'))
    );
  }
}
