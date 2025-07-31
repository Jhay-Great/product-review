import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  routeTo = input<string>('');
  header = input.required<string>();
  svgIcon = input<string>('');
}
