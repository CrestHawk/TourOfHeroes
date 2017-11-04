import { Component } from '@angular/core';
import { Hero } from './Instances/Hero';

@Component({
  selector: 'my-app',
  //template: `<h1>{{title}}</h1> <h2>{{hero}} details!</h2>`,
  templateUrl: "./views/MainAppComponent.html"
})
export class AppComponent  
{ 
    title: string;
    myHero: Hero;
    heroes: Array<Hero>;

    constructor()
    {
        this.title = "Marvel vs. Capcom 2: New Age of Heroes";
        this.heroes = [ new Hero(1, "Spiderman"),
                        new Hero(2, "Wolverine"),
                        new Hero(3, "Magneto"),
                        new Hero(4, "Megaman")];
        this.myHero = this.heroes[0];
    }
}

