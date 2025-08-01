import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ProductFeedback, ServerFeedback, Suggestion } from '../model/suggestion.model';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/htt/http.service';
import { HttpResponseInterface } from 'src/app/core/models/http.model';
import { adaptFeedbackFromServer, adaptFeedbackToServer } from '../feedback.adapter';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private http = inject(HttpService);

  private baseUrl = environment.api;
  private endpoint = environment.feedbackEndpoint;
  private dataUrl = environment.localApi;

  constructor() { }

  private getData(): Observable<HttpResponseInterface<Suggestion[]>> {
    // const url = this.dataUrl;
    const url = `${this.baseUrl}/${this.endpoint}`;

    return this.http.get<HttpResponseInterface<Suggestion[]>>(url);
  }

  getProductRequests():Observable<Suggestion[]> {
    return this.getData().pipe(
      map(data => {
        console.log('data: ', data.data);
        return (data.data);
        // return adaptFeedbackFromServer(data.data);
      })
    )
  }

  // getCurrentUser() {
  //   return this.getData().pipe(
  //     map(data => data.data.currentUser)
  //   )
  // };
}
