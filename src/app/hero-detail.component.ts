import { Component, Input } from '@angular/core';
import { Hero } from './Instances/Hero';

//templatesUrl: 'e:/Development/Git_Projects/TourOfHeroes/src/app/views/HeroDetailComponent.html'
@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div>
            <label>id: </label> {{hero.id}}
        </div>
        <div>
            <label>name:</label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    </div>
    `
})
export class HeroDetailComponent 
{
    // This is now an input property, meaning it gets the value from the parent component
    // The parent component being the app.component, that has the "selectedHero"
    @Input() hero: Hero;
}