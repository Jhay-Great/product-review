import { Component } from '@angular/core';
import { AsideComponent } from "../../components/aside/aside.component";
import { ListsComponent } from "../../components/lists/lists.component";

@Component({
  selector: 'app-suggestions',
  imports: [AsideComponent, ListsComponent],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.scss'
})
export class SuggestionsComponent {

}
