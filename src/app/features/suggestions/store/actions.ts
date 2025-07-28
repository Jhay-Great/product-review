import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Suggestion } from "../model/suggestion.model";

export const SuggestionActions = createActionGroup({
  source: 'Suggestions',
  events: {
    'Load Suggestions': emptyProps,
    'Load Suggestions Success': props<{suggestions: Suggestion[]}>(),
    'Load Suggestions Failed': props<{error: string}>(),
  }
})