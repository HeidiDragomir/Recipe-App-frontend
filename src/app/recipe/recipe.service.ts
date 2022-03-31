import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe, RecipeAPI } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // private apiUrl = 'http://localhost:5000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Accept: 'application/json',
    }),
  };

  private apiUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  apiId = 'c8dd4a6a';
  apiKey = 'dc5e4004a3fe30ebd0b83a40936125df';
  id!: number | string;
  search!: string;

  constructor(private http: HttpClient) {}

  /* getAll(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.apiUrl + '/recipes/')
      .pipe(catchError(this.errorHandler));
  } */
  // (this.apiUrl + '&app_id=' + this.apiId + '&app_key=' + this.apiKey)

  getAllRecipes(search: string): Observable<RecipeAPI> {
    return this.http
      .get<RecipeAPI>(
        this.apiUrl +
          '&q=' + search +
          '&app_id=' +
          this.apiId +
          '&app_key=' +
          this.apiKey
      )
      .pipe(catchError(this.errorHandler));
  }

  getRecipe(recipeId: number | string): Observable<RecipeAPI> {
    return this.http
      .get<RecipeAPI>(
        this.apiUrl +
          '&q=' + this.search + recipeId +
          '&app_id=' +
          this.apiId +
          '&app_key=' +
          this.apiKey
      )
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
