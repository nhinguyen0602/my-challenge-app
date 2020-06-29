import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { House } from '../shared/model/house';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private houseUrl = environment.apiUrl + '/houses';

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.alertService.error(`${operation} failed: ${error.alertService}`);
      return of(result as T);
    };
  }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.houseUrl).pipe(
      catchError(this.handleError<House[]>('getHouses'))
    );
  }

}
