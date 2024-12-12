import { Component } from '@angular/core';

@Component({
selector: 'app-heroes-list',
templateUrl: './list.component.html',
styleUrl: './list.component.css'

})


export class ListComponent {

  public heronames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  public deletedHero?: string;

  removeLastHeroes():void{
    this.deletedHero=this.heronames.pop();
  }

}