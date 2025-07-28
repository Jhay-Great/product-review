import { Component, effect, inject, OnInit, signal } from '@angular/core';

import { ListItemComponent } from '../list-item/list-item.component';
import { SuggestionService } from '../../services/suggestion.service';
import { take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSuggestions } from '../../store/feature';
import { SuggestionActions } from '../../store/actions';

@Component({
  selector: 'app-lists',
  imports: [ListItemComponent],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent implements OnInit {
  private readonly store = inject(Store);
  private suggestionService = inject(SuggestionService);

  suggestions = this.store.selectSignal(selectSuggestions);

  ngOnInit():void {
    this.store.dispatch(SuggestionActions.loadSuggestions());
  }
}
