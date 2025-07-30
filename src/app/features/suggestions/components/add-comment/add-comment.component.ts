import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  imports: [FormsModule ],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.scss'
})
export class AddCommentComponent {
  commentsCount = signal<number>(0);
  value = '';
  
  onSubmit(form:NgForm) {
    if (form.invalid) {
      return;
    }

    const { value } = form;
    console.log(value);
    console.log(value.comment.length);

  }
}
