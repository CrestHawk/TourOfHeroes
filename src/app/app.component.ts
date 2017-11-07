import { Component } from '@angular/core';
import { Hero } from './Instances/Hero';

@Component({
  selector: 'my-app',
  //template: `<h1>{{title}}</h1> <h2>{{hero}} details!</h2>`,
  templateUrl: "./views/MainAppComponent.html",
  styleUrls: ['./styles/hero-app.component.css']
})
export class AppComponent  
{ 
    title: string;
    myHero: Hero;
    heroes: Array<Hero>;
    selectedHero: Hero;

    constructor()
    {
        this.title = "Marvel vs. Capcom 2: New Age of Heroes";
        const HEROES: Hero[] = [
            { id: 11, name: 'Wolverine' },
            { id: 12, name: 'Spiderman' },
            { id: 13, name: 'Batman' },
            { id: 14, name: 'Aqua Man' },
            { id: 15, name: 'Captain Merica!' },
            { id: 16, name: 'Luffy D. Monkey' },
            { id: 17, name: 'Usopp' },
            { id: 18, name: 'Brooke' },
            { id: 19, name: 'Zolo' },
            { id: 20, name: 'Sanji' } 
        ];
        this.heroes = HEROES;
        this.myHero = this.heroes[1];
    }

    onSelect(hero: Hero): void
    {
        this.selectedHero = hero;
    }
}

