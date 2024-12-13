import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
//creamos la lista con los personajes que nos van a salir siempre 
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name:'Goku',
    power: 9500
  },{
    name:"Vegeta",
    power: 7500
  }];

 // onDelete = Index value: number;
//te agrega el nuevo personaje
  onNewCharacter(character:Character): void{
    this.characters.push(character);
  }
//te elimina un personaje
  onDeleteCharacter(index:number){

    //this.characters.splice(1,2)
    this.characters.splice(index,1);
  }

}