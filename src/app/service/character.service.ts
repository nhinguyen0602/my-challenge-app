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

  public characterUrl = environment.apiUrl + `/characters/`;

  constructor(
    private http: HttpClient
  ) {
  }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.characterUrl).pipe(map(res => res));
  }

  getCharacter(url: string): Observable<Character> {
    return this.http.get<Character>(url).pipe(map(res => res));
  }
}
