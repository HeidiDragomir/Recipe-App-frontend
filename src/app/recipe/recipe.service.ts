import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe, RecipeAPI } from './recipe';
import { Api } from './api';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // private apiUrl = 'http://localhost:5000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'access-control-allow-origin, access-control-allow-headers',
    }),
  };

  private apiUrl = 'https://api.spoonacular.com/recipes/';

  private localApi = 'http://localhost:8000/api';

  private apiKey = '7c0097059eea4b37ac2979292e6eeee3';

  public number = '5';

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<RecipeAPI> {
    return this.http
      .get<RecipeAPI>(
        this.apiUrl +
          'complexSearch' +
          '?apiKey=' +
          this.apiKey +
          '&number=' +
          this.number
      )
      .pipe(catchError(this.errorHandler));
  }

  getRecipe(id: number): Observable<RecipeAPI> {
    return this.http
      .get<RecipeAPI>(this.apiUrl + id + '/information?apiKey=' + this.apiKey)
      .pipe(catchError(this.errorHandler));
  }

  /* saveRecipe() {
    return this.http
      .post(
        this.localApi + '/recipes',
        JSON.stringify(),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  } */

  /* saveRecipe(data: any) {
    return this.http.post(this.localApi + '/recipes/', data, this.httpOptions);
  } */

  // store function to save to the laravel api

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
