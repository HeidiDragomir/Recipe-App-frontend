import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'http://localhost:5000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Accept: 'application/json',
    }),
  };
  /* 
  private apiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=c8dd4a6a&app_key=dc5e4004a3fe30ebd0b83a40936125df';
apiId = `c8dd4a6a`;
  apiKey = `dc5e4004a3fe30ebd0b83a40936125df`; */

  constructor(private http: HttpClient) {}

  getAll(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.apiUrl + '/recipes/')
      .pipe(catchError(this.errorHandler));
  }
  // (this.apiUrl + '&app_id=' + this.apiId + '&app_key=' + this.apiKey)

  /* getAll(): Observable<RecipeAPIdata> {
    return this.http
      .get<RecipeAPIdata>(this.apiUrl + '')
      .pipe(catchError(this.errorHandler));
  } */

  find(id: number | string): Observable<Recipe> {
    return this.http
      .get<Recipe>(this.apiUrl + '/recipes/' + id)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
