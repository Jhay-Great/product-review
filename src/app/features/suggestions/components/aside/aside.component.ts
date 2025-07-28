import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  readonly roadmaps = signal<any>([
    {id: 1, name: 'Planned', count: 2},
    {id: 2, name: 'In-Progress', count: 3},
    {id: 3, name: 'Live', count: 1},
  ]);

  readonly tags = signal<any>([
    {id: 1, name: 'All' },
    {id: 2, name: 'UI' },
    {id: 3, name: 'UX' },
    {id: 4, name: 'Enhancemenet' },
    {id: 5, name: 'Bug' },
    {id: 6, name: 'Feature' },
  ])

}
