import { Component } from "@angular/core";
import { character } from "../interfaces/character.interface";

@Component({
selector:'app-dbz-main-page',
templateUrl:'./main-page.Component.html'
})
export class MainPageComponent{
    public characters: character[]=[{
        name: 'krillin',
        power: 1000
    },{
        name: 'goku',
        power: 9500
    },{
        name: 'vegeta',
        power: 7500
    }];
}