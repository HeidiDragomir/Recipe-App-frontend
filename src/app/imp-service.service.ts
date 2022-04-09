import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImpServiceService {

  private localApi = '//recipes-app-be.herokuapp.com/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  /* addRecipe(data: any) {
    return this.http.post(`${this.localApi}/recipe`, data)
    }; */
  
}
