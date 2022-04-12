import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe, RecipeAPI } from './recipe';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrl = 'https://api.spoonacular.com/recipes/';

  private apiKey!: string;

  public number = '10';


  // Search //
  query!: string;
  dietLabel!: string;
  intoleranceLabel!: string;
  mealTypeLabel!: string;
  cuisineLabel!: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;
  }

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


  // Search //

  getSearchRecipes(
    query: string,
    dietLabel: string,
    intoleranceLabel: string,
    mealTypeLabel: string,
    cuisineLabel: string
  ): Observable<RecipeAPI> {
    return this.http
      .get<RecipeAPI>(
        this.apiUrl +
          'complexSearch' +
          '?apiKey=' +
          this.apiKey +
          '&query=' +
          query +
          '&diet=' +
          dietLabel +
          '&intoleranceLabel=' +
          intoleranceLabel +
          '&type=' +
          mealTypeLabel +
          '&includeIngredients' +
          cuisineLabel
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
    return throwError(() => new Error('test'));
  }
}
