import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ProductFeedback } from '../model/suggestion.model';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private dataUrl = 'data.json'
  private http = inject(HttpClient);

  constructor() { }

  private getData(): Observable<ProductFeedback> {
    return this.http.get<ProductFeedback>(this.dataUrl);
  }

  getProductRequests() {
    return this.getData().pipe(
      map(data => data.productRequests)
    )
  }

  getCurrentUser() {
    return this.getData().pipe(
      map(data => data.currentUser)
    )
  };
}
