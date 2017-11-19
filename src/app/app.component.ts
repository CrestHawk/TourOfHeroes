import { Component } from '@angular/core';
import { Hero } from './Instances/Hero';
import { HeroService } from './services/hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>{{title}}</h1> <h2>{{hero}} details!</h2>`,
  templateUrl: "./views/MainAppComponent.html",
  styleUrls: ['./styles/hero-app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit
{ 
    title: string;
    heroes: Array<Hero>;
    selectedHero: Hero;

    constructor(private heroService: HeroService)
    {
        this.title = "Marvel vs. Capcom 2: New Age of Heroes";
    }

    onSelect(hero: Hero): void
    {
        this.selectedHero = hero;
    }

    getHeroes(): void 
    {
        this.heroService.getHeroes()
        .then(heroes => 
            {
                this.heroes = heroes;
            });
    }

    ngOnInit(): void
    {
        this.getHeroes();
    }
}

