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
  searchRecipe(data: any): Observable<Recipe[]> {
    return this.http
      .get<any>(
        `${this.apiUrl}complexSearch?apiKey=${this.apiKey}&query=${data.query}&type=${data.type}&diet=${data.diet}`
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
