import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopulationService {
  private baseURL = 'https://datausa.io/api';

  constructor(private http: HttpClient) {}

  getPopulationInfo(): Observable<any> {
    const URL = `${this.baseURL}/data?drilldowns=Nation&measures=Population`;
    // return this.http.get<IPopulationInfos>(URL);
    return this.http.get(URL).pipe(
      map((resp: any) =>{
        resp.json();
        console.log("Population INFO:" + resp.json())
      }),
      catchError((error) => this.throwError(error))
    );
  }

  throwError(error: any) {
    console.error(error);
    return throwError(error.json().error || 'Server error');
  }
}
