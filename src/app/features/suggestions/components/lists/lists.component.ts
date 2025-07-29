import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ListItemComponent } from '../list-item/list-item.component';
import { SuggestionService } from '../../services/suggestion.service';
import { Store } from '@ngrx/store';
import { selectError, selectLoading, selectSuggestions } from '../../store/feature';
import { SuggestionActions } from '../../store/actions';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';

@Component({
  selector: 'app-lists',
  imports: [RouterLink, ListItemComponent, NotFoundComponent],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent implements OnInit {
  private readonly store = inject(Store);
  private suggestionService = inject(SuggestionService);

  suggestions = this.store.selectSignal(selectSuggestions);
  loading = this.store.selectSignal(selectLoading);
  error = this.store.selectSignal(selectError);

  ngOnInit():void {
    this.store.dispatch(SuggestionActions.loadSuggestions());
  }
}
