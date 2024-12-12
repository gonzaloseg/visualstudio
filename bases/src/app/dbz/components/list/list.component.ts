import { Component,Input } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: character[] = [{
    name: 'trunk',
    power: 10
  }]
}
