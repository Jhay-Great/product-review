import { Injectable, inject } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { SuggestionActions } from "./actions";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { SuggestionService } from "../services/suggestion.service";
import { Router } from "@angular/router";

@Injectable()
export class SuggestionEffect {
  private actions$:Actions = inject(Actions);
  private router = inject(Router);
  private suggestionService = inject(SuggestionService);

  loadSuggestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SuggestionActions.loadSuggestions),
      switchMap(() => {
        return this.suggestionService.getProductRequests().pipe(
          map(suggestions => SuggestionActions.loadSuggestionsSuccess({suggestions: suggestions})),
          catchError(() => of(SuggestionActions.loadSuggestionsFailed({ error: 'An error occurred...'})))
        )
      })
    )
  });

  createSuggestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SuggestionActions.createFeedback),
      switchMap(({feedback}) => {
        return this.suggestionService.createFeedback(feedback).pipe(
          map(suggestions => SuggestionActions.loadSuggestionsSuccess({suggestions: suggestions})),
          catchError(() => of(SuggestionActions.loadSuggestionsFailed({ error: 'An error occurred...'})))
        )
      })
    )
  });

  deleteSuggestioin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SuggestionActions.deleteFeedback),
      mergeMap(({feedbackId}) => {
        return this.suggestionService.deleteFeedback(feedbackId).pipe(
          map(suggestions => SuggestionActions.loadSuggestionsSuccess({suggestions})),
          tap(() => this.router.navigate([''])),
          catchError(() => of(SuggestionActions.loadSuggestionsFailed({error: 'An error occurred'}))),
        )
      })
    )
  })
}