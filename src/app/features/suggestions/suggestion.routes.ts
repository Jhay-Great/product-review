import { Routes } from "@angular/router";
import { SuggestionsComponent } from "./pages/suggestions/suggestions.component";
import { provideState } from "@ngrx/store";
import { suggestionReducer } from "./store/reducers";
import { provideEffects } from "@ngrx/effects";
import { SuggestionEffect } from "./store/effects";

export const SUGGESTIONS_ROUTES: Routes = [
  {
    path: '',
    providers: [
      provideState('suggestion', suggestionReducer),
      provideEffects(SuggestionEffect),
    ],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/suggestions/suggestions.component').then(s => s.SuggestionsComponent),
        title: 'Feedback reviews',
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/feedback-details/feedback-details.component').then(f => f.FeedbackDetailsComponent),
        title: 'Feedback detail',
      }
    ],
  }
]