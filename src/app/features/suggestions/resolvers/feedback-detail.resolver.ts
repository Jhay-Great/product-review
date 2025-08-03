import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { Router } from "@angular/router";
import { SuggestionService } from "../services/suggestion.service";
import { Suggestion } from "../model/suggestion.model";
import { Store } from "@ngrx/store";
import { selectSelectedSuggestion } from "../store/feature";
import { EMPTY, map, of, switchMap, take, tap } from "rxjs";
import { SuggestionActions } from "../store/actions";

export const feedbackDetailResolver:ResolveFn<Suggestion | null> = function(route) {
  const id = route.paramMap.get('id');
  const store = inject(Store);
  const suggestion = store.selectSignal(selectSelectedSuggestion);

  if (id) {
    store.dispatch(SuggestionActions.loadSelectedFeedback({id}));
  }

  if (!suggestion) return EMPTY;
  
  console.log({suggestion: suggestion()});
  return suggestion();
}

// export const feedbackDetailResolver:ResolveFn<Suggestion> = function(route) {
//     const suggestionSevice = inject(SuggestionService);
//     const router = inject(Router);
//     const store = inject(Store);
//     const id = route.paramMap.get('id');

//     return store.select(selectSelectedSuggestion).pipe(
//     take(1),
//     tap(data => {
//       console.log('id: ', id);
//       console.log('in resolver: ', data);
//     }),
//     switchMap(suggestion => {
//       if (!suggestion) {
//         if (id) {
//           store.dispatch(SuggestionActions.loadSelectedFeedback({id}))
//         }
//         const data = store.select(selectSelectedSuggestion);
//         if (data) return data;
//         // console.warn('Suggestion not found – cancelling navigation');
//         // return EMPTY; // ❌ navigation cancelled, no redirection
//       }
//       return of(suggestion); // ✅ emit value, continue navigation
//     })
//   );
    
// //   return store.select(selectSelectedSuggestion).pipe(
// //     take(1),
// //     map(suggestion => {
// //       if (!suggestion) {
// //         console.warn('Navigation cancelled: Suggestion not found');
// //         return EMPTY; // ❌ Not correct — see fix below
// //       }
// //       return suggestion;
// //     })
// //   );
// }