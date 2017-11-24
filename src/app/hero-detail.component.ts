/*
    ActivatedRoute: Contains the information about a route associated with a component loaded in an outlet.
      An ActivatedRoute can also be used to traverse the router state tree

    ParamMap: makes it easier to work with parameters as they could have either a single value or multiple value

    ParamMap: An observable property of Activated Route, so we need both
      An observable is the most basic building block of RxJS, what Angular is built on top of

    Location is a service that applications can use to interact with a browser's URL.
*/
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './Instances/Hero';
import { HeroService } from './services/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    //templatesUrl: 'e:/Development/Git_Projects/TourOfHeroes/src/app/views/hero-detail.component.html'
    templateUrl: './views/hero-detail.component.html',
    styleUrls: [ './styles/hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit
{
    public hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location)
    {}

    ngOnInit(): void
    {
      // Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.
        this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void
    {
        this.location.back();
    }

    // This is now an input property, meaning it gets the value from the parent component
    // The parent component being the app.component, that has the "selectedHero"
    //@Input() hero: Hero;
}
