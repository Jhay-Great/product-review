import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  title = input<string>('');
  description = input<string>('');
  buttonLabel = input<string>('');
  clicked = output<void>();

  onClicked() {
    this.clicked.emit();
  }
}
