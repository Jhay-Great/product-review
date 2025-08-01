import { createReducer, on } from "@ngrx/store";
import { Suggestion } from "../model/suggestion.model";
import { SuggestionActions } from "./actions";

export interface SuggestionState {
  suggestions: Suggestion[];
  loading: boolean;
  error: string | null;
  selectedSuggestion: Suggestion | null,
}

const initialState: SuggestionState = {
  suggestions: [],
  loading: false,
  error: null,
  selectedSuggestion: null,
}

export const suggestionReducer = createReducer(
  initialState,
  on(SuggestionActions.loadSuggestions, (state) => ({...state, loading: true })),
  on(SuggestionActions.loadSuggestionsSuccess, (state, { suggestions }) => ({...state, suggestions, loading: false })),
  on(SuggestionActions.loadSuggestionsFailed, (state, { error }) => ({...state, error, loading: false })),
  on(SuggestionActions.loadSelectedFeedback, (state, { id }) => {
    const feedback = state.suggestions.find(suggestion => suggestion.id.toString() === id);
    return feedback ? {...state, selectedSuggestion: feedback, loading: false} : {...state, selectedSuggestion: null, loading:false};
  })
);