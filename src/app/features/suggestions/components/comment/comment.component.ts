import { Component, input } from '@angular/core';
import { Comment } from '../../model/suggestion.model';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  comment = input<Comment>();
}
