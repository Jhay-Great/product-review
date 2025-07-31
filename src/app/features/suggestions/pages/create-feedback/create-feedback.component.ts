import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormComponent } from "src/app/shared/components/form/form.component";
import { InputTextComponent } from "src/app/shared/components/input-text/input-text.component";

@Component({
  selector: 'app-create-feedback',
  imports: [ReactiveFormsModule, FormComponent, InputTextComponent],
  templateUrl: './create-feedback.component.html',
  styleUrl: './create-feedback.component.scss'
})
export class CreateFeedbackComponent {

}
