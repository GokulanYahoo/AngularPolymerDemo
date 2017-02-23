import { Component } from '@angular/core';

@Component({
    selector: 'slist-details',
    templateUrl: './home.component.html',
})

export class HomeComponent {

    userName: string;

    constructor() {
        if (localStorage) {
            this.userName = localStorage.getItem('userName');
            console.log('Logged in user: ', this.userName);
        }
    }
}
