import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>{{title}}</h1> <h2>{{hero}} details!</h2>`,
  templateUrl: "./views/MainAppComponent.html"
})
export class AppComponent  
{ 
    title: string;
    myHero: string;
    heroes: Array<string>;

    constructor()
    {
        this.title = "Marvel vs. Capcom 2: New Age of Heroes";
        this.heroes = ["Spiderman", "Wolverine", "Magneto"]
        this.myHero = this.heroes[0];
    }
}

