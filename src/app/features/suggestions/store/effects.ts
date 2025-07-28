import { Injectable, inject } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { SuggestionActions } from "./actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { SuggestionService } from "../services/suggestion.service";

@Injectable()
export class SuggestionEffect {
  private actions$:Actions = inject(Actions);
  private suggestionService = inject(SuggestionService);

  loadSuggestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SuggestionActions.loadSuggestions),
      switchMap(() => {
        return this.suggestionService.getProductRequests().pipe(
          tap(() => console.log('called...')),
          map(suggestions => SuggestionActions.loadSuggestionsSuccess({suggestions: suggestions})),
          catchError(() => of(SuggestionActions.loadSuggestionsFailed({ error: 'An error occurred...'})))
        )
      })
    )
  })
}