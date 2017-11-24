import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    templateUrl: './views/app.component.html',
    styleUrls: ['./styles/app.component.css']
})
export class AppComponent
{
    title: string;

    constructor()
    {
        this.title = "Marvel vs. Capcom 2: New Age of Heroes";
    }
}
