import { Injectable } from '@angular/core';
import { Hero } from '../Instances/Hero';
import { HEROES } from '../mockData/mock-heroes';

@Injectable()
export class HeroService
{
    getHeroes(): Promise<Hero[] >
    {
        return Promise.resolve(HEROES);
    }
}