import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
    }),
  };

  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  
  private apiKey = '7c0097059eea4b37ac2979292e6eeee3';

  public number = '51';

  constructor(private http: HttpClient) {}

  

  getAllRecipes(): Observable<RecipeAPI> {
    return this.http
      .get<RecipeAPI>(this.apiUrl + '?apiKey=' + this.apiKey + '&number=' + this.number)
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
