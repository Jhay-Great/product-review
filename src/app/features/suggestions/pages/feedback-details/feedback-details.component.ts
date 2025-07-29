import { Component, DestroyRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// packages
import { Store } from '@ngrx/store';

// local modules
import { ListItemComponent } from "../../components/list-item/list-item.component";
import { SuggestionActions } from '../../store/actions';
import { selectSelectedSuggestion } from '../../store/feature';

@Component({
  selector: 'app-feedback-details',
  imports: [RouterLink, ListItemComponent],
  templateUrl: './feedback-details.component.html',
  styleUrl: './feedback-details.component.scss'
})
export class FeedbackDetailsComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef$ = inject(DestroyRef);
  private readonly store = inject(Store);
  feedback = this.store.selectSignal(selectSelectedSuggestion);

  constructor() {
    this.activatedRoute.paramMap.pipe(
      takeUntilDestroyed(this.destroyRef$),
    ).subscribe(param => {
      const id = param.get('id');
      if (id) {
        this.store.dispatch(SuggestionActions.loadSelectedFeedback({id}))
      }
    })
  }

}
