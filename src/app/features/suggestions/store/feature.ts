import { createFeature } from "@ngrx/store";
import { suggestionReducer } from "./reducers";

const suggestionFeature = createFeature({
  name: 'suggestion',
  reducer: suggestionReducer,
});

export const {
  selectSuggestions,
  selectSelectedSuggestion,
  selectLoading,
  selectError,
} = suggestionFeature;