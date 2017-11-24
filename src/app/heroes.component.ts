import { Component } from '@angular/core';
import { Hero } from './Instances/Hero';
import { HeroService } from './services/hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: "./views/heroes.component.html",
  styleUrls: ['./styles/heroes.component.css']
})
export class HeroesComponent implements OnInit
{
    heroes: Array<Hero>;
    selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router)
    {

    }

    ngOnInit(): void
    {
        this.getHeroes();
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

    gotoDetail(): void
    {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

