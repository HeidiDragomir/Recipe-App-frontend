import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RecipeList } from './recipe-list';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  private localApi = 'http://localhost:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

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


  delete(id: number | string) {
    return this.http
      .delete<RecipeList>(this.localApi + '/recipelist/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}