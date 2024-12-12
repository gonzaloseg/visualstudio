import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
interface heroe{
  nombre: String;
  edad: number;
  descripcion:String;

}const ironman: heroe={
  nombre:"ironman",
  edad:22,
  descripcion:"un personaje que lanza cohetes vuela y tiene mucho dinero"
};

