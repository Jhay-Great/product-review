import { Component, input, output } from '@angular/core';
import { Suggestion } from '../../model/suggestion.model';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  suggestion = input<any>();
  upvote = output<string | number>();

  onUpvote(id: string | number) {
    this.upvote.emit(id);
  }

}
