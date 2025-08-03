import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { map, Observable, of, pipe, tap } from 'rxjs';
import { NewFeedback, ProductFeedback, ServerFeedback, Suggestion } from '../model/suggestion.model';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/htt/http.service';
import { HttpResponseInterface } from 'src/app/core/models/http.model';
import { adaptFeedbackFromServer, adaptFeedbackToServer } from '../feedback.adapter';

type RequestType = HttpResponseInterface<Suggestion[]>;

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private http = inject(HttpService);

  private baseUrl = environment.api;
  private endpoint = environment.feedbackEndpoint;
  private api = `${this.baseUrl}/${this.endpoint}`;
  private dataUrl = environment.localApi;

  created = signal<boolean>(false);

  constructor() { }
  
  // rxjs custom operator
  private transform<T>() {
    return pipe(
      map((response: { data: T}) => response.data),
      tap(data => {
        console.log('data from server: ', data);
      })
    )
  }

  private getData(): Observable<HttpResponseInterface<Suggestion[]>> {
    // const url = this.dataUrl;
    // const url = `${this.baseUrl}/${this.endpoint}`;
    const url = this.api;

    return this.http.get<HttpResponseInterface<Suggestion[]>>(url);
  }

  getProductRequests():Observable<Suggestion[]> {
    return this.getData().pipe(
      this.transform<Suggestion[]>()
    )
  }

  getProductFeedback(id:string) {
    const url = `${this.api}/${id}`;
    return this.http.get<RequestType>(url).pipe(
      this.transform<Suggestion[]>()
    );
  }

  createFeedback(data: NewFeedback): Observable<Suggestion[]> {
    const url = this.api;
    return this.http.post<NewFeedback, RequestType>(url, data).pipe(
      this.transform<Suggestion[]>(),
    )
  };

  editFeedback(id: string, data:Partial<NewFeedback>):Observable<Suggestion[]> {
    const url = `${this.api}/${id}`;
    return this.http.put<Partial<NewFeedback>, RequestType>(url, data).pipe(
      this.transform<Suggestion[]>()
    )
  }

  upVoteFeedback(id:string) {
    const url = `${this.api}/upvote/${id}`;
    return this.http.post(url, null);
  }

  deleteFeedback(id:string):Observable<Suggestion[]> {
    const url = `${this.api}/${id}`;
    return this.http.delete<RequestType>(url).pipe(
      this.transform<Suggestion[]>()
    );
  }

  // getCurrentUser() {
  //   return this.getData().pipe(
  //     map(data => data.data.currentUser)
  //   )
  // };
}
