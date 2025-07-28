import { Component, signal } from '@angular/core';

import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-lists',
  imports: [ListItemComponent],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {
  suggestions = signal<any>([
    { id: 1, upvotes: 112, comments: ['hi', 'nice', 'good'], tag: 'Enhancement', header: 'Add tags for solution', description: 'Easier' },
    { id: 2, upvotes: 112, comments: ['hi', 'nice', 'good'], tag: 'Feature', header: 'Add a dark theme option', description: 'Easier' }
  ])
}
