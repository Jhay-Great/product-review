import { Routes } from "@angular/router";
import { SuggestionsComponent } from "./pages/suggestions/suggestions.component";
import { provideState } from "@ngrx/store";
import { suggestionReducer } from "./store/reducers";
import { provideEffects } from "@ngrx/effects";
import { SuggestionEffect } from "./store/effects";

export const SUGGESTIONS_ROUTES: Routes = [
  {
    path: '',
    component: SuggestionsComponent,
    providers: [
      provideState('suggestion', suggestionReducer),
      provideEffects(SuggestionEffect),
    ]
  }
]