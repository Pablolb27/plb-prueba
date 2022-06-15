import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { nasaObject } from '../shared/nasaObject.interface';
import * as CONST from './../shared/const';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL: string = `${CONST.baseUrl}?api_key=${CONST.apiKey}`;
  
  constructor(private http: HttpClient) {}

  public getInfo(date: string): Observable<any> {
    return this.http.get(this.baseURL + '&date=' + date);
  }
}
