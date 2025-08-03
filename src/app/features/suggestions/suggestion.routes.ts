import { Routes } from "@angular/router";
import { SuggestionsComponent } from "./pages/suggestions/suggestions.component";
import { provideState } from "@ngrx/store";
import { suggestionReducer } from "./store/reducers";
import { provideEffects } from "@ngrx/effects";
import { SuggestionEffect } from "./store/effects";
import { feedbackDetailResolver } from "./resolvers/feedback-detail.resolver";

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
        path: 'add-feedback',
        loadComponent: () => import('./pages/create-feedback/create-feedback.component').then(a => a.CreateFeedbackComponent),
        title: 'Add feedback',
      },
      {
        path: 'edit-feedback/:id',
        loadComponent: () => import('./pages/edit-feedback/edit-feedback.component').then(e => e.EditFeedbackComponent),
        title: 'Edit feedback',
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/feedback-details/feedback-details.component').then(f => f.FeedbackDetailsComponent),
        title: 'Feedback detail',
        // resolve: {
        //   feedback: feedbackDetailResolver,
        // },
      },
    ],
  }
]