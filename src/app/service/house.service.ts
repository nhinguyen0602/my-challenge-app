import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { House } from '../shared/model/house';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  public houseUrl = environment.apiUrl + `/houses/`;

  constructor(
    private http: HttpClient
  ) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.houseUrl).pipe(map(res => res));
  }

  getHouse(url: string): Observable<House> {
    return this.http.get<House>(url).pipe(map(res => res));
  }

}
