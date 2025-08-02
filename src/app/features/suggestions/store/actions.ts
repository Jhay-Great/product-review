import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { NewFeedback, Suggestion } from "../model/suggestion.model";

export const SuggestionActions = createActionGroup({
  source: 'Suggestions',
  events: {
    'Load Suggestions': emptyProps,
    'Load Suggestions Success': props<{suggestions: Suggestion[]}>(),
    'Load Suggestions Failed': props<{error: string}>(),

    // dispatch an item
    'Load Selected Feedback': props<{id: string}>(),

    // create feedback
    'Create Feedback': props<{feedback: NewFeedback}>(),

    // edit feedback
    'Edit Feedback': props<{id: string, feedback: Partial<NewFeedback>}>(),

    // delete feedback
    'Delete Feedback': props<{feedbackId: string}>(),
  }
})