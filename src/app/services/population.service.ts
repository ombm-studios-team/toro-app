import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { IPopulationInfo } from '../models/ipopulation-info';

@Injectable({
  providedIn: 'root',
})
export class PopulationService {
  private endpoint =
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

  constructor(private http: HttpClient) {}

  getPopulationInfo(): Observable<any> {
    const URL = `${this.endpoint}`;
    return this.http.get<IPopulationInfo>(URL).pipe(
      map((resp: any) => resp.data),
      catchError((error) => this.throwError(error))
    );
  }

  // Handle Errors
  throwError(error: HttpErrorResponse) {
    let errorMessage = '';
    error.error instanceof ErrorEvent
      ? (errorMessage = error.error.message)
      : (errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`);

    return throwError(() => errorMessage);
  }
}
