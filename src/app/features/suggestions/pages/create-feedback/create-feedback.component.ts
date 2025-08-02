import { Component, effect, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormComponent } from "src/app/shared/components/form/form.component";
import { InputTextComponent } from "src/app/shared/components/input-text/input-text.component";
import { SuggestionActions } from '../../store/actions';
import { NewFeedback } from '../../model/suggestion.model';
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'app-create-feedback',
  imports: [ReactiveFormsModule, FormComponent, InputTextComponent],
  templateUrl: './create-feedback.component.html',
  styleUrl: './create-feedback.component.scss'
})
export class CreateFeedbackComponent {
  private fb = inject(FormBuilder);
  private suggestionService = inject(SuggestionService);
  private store = inject(Store);
  
  form:FormGroup = this.fb.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
  });

  onSubmit() {
    const form = this.form;
    console.log('created: ', this.suggestionService.created());
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    };

    const { value } = form;
    
    this.store.dispatch(SuggestionActions.createFeedback({feedback: value}));
  };

}
