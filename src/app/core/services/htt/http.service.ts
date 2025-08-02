import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient);

  get<T>(url:string):Observable<T> {
    return this.http.get<T>(url);
  };

  post<T, R>(url:string, body:T):Observable<R> {
    // console.log(url, body);
    return this.http.post<R>(url, body);
  }

  put<T, R>(url:string, body:T):Observable<R> {
    return this.http.put<R>(url, body);
  }

  delete<T>(url:string):Observable<T> {
    return this.http.delete<T>(url);
  }

}
