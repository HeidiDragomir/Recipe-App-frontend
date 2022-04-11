import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RecipeList } from './recipe-list';
import { Recipe } from '../recipe/recipe';
import { RecipeService } from '../recipe/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  private localApi = '//recipes-app-be.herokuapp.com/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, public recipeService: RecipeService) {}

  getAllList(): Observable<RecipeList[]> {
    return this.http
      .get<RecipeList[]>(this.localApi + '/recipelist')
      .pipe(catchError(this.errorHandler));
  }

  create(recipelist: any): Observable<RecipeList> {
    return this.http
      .post<RecipeList>(
        this.localApi + '/recipelist',
        JSON.stringify(recipelist),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  /* addlist(recipelist: any): Observable<RecipeList> {
    return this.http
      .post<RecipeList>(
        this.localApi + '/lists',
        JSON.stringify(recipelist),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  } */

  find(id: number | string): Observable<RecipeList[]> {
    return this.http
      .get<RecipeList[]>(this.localApi + '/recipelist/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: number | string, recipelist: any): Observable<RecipeList> {
    return this.http
      .put<RecipeList>(
        this.localApi + '/recipelist/' + id,
        JSON.stringify(recipelist),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  updateList(id: number | string, recipelist: any): Observable<RecipeList> {
    return this.http
      .put<RecipeList>(
        this.localApi + '/recipelist/' + id,
        JSON.stringify(recipelist),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number | string) {
    return this.http
      .delete<RecipeList>(this.localApi + '/recipelist/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // Recipe

  getAll(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.localApi + '/recipes')
      .pipe(catchError(this.errorHandler));
  }

  addRecipe(data: any) {
    return this.http
      .post(this.localApi + '/recipe', data)
      .pipe(catchError(this.errorHandler));
  }

  deleterecipe(id: number | string): Observable<Recipe> {
    return this.http
      .delete<Recipe>(this.localApi + '/recipe/' + id)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error('test'));
  }
}
