import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormComponent } from "src/app/shared/components/form/form.component";
import { InputTextComponent } from "src/app/shared/components/input-text/input-text.component";
import { SuggestionActions } from '../../store/actions';
import { NewFeedback, Suggestion } from '../../model/suggestion.model';
import { SuggestionService } from '../../services/suggestion.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { selectSelectedSuggestion } from '../../store/feature';


@Component({
  selector: 'app-edit-feedback',
  imports: [ReactiveFormsModule, FormComponent, InputTextComponent],
  templateUrl: './edit-feedback.component.html',
  styleUrl: './edit-feedback.component.scss'
})
export class EditFeedbackComponent {
  private fb = inject(FormBuilder);
  private router = inject(ActivatedRoute);
  private destroyRef$ = inject(DestroyRef);
  private store = inject(Store);

  form:FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    category: ['', [Validators.required]],
    status: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });
  feedback = signal<Suggestion>({} as Suggestion);
  feedbackId = signal<string>('');

  constructor() {
    this.router.paramMap.pipe(
      takeUntilDestroyed(this.destroyRef$),
    ).subscribe(param => {
      const id = param.get('id');
      if (id) {
        const data = this.store.selectSignal(selectSelectedSuggestion);

        const feedback = data();

        if (feedback) {
          this.feedback.set(feedback);
          this.feedbackId.set(id);
          this.patchForm(feedback);

        }
        
      }
    })
  }

  private patchForm(data:Suggestion) {
    this.form.patchValue(data);
  }

  onSubmit() {
    const form = this.form;
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    };

    const { value } = form;
    this.store.dispatch(
      SuggestionActions.editFeedback({
        id: this.feedbackId(),
        feedback: value
      })
    );

  }

  delete() {
    this.store.dispatch(
      SuggestionActions.deleteFeedback({
        feedbackId: this.feedbackId()
      })
    );
  }
}
