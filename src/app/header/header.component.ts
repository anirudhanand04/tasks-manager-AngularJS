import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    template: '<h1> Hello World </h1>',
    templateUrl: './header.Component.html',
    styles: [`
        h1 {
            color: blue;
        }
    `],
    styleUrl: './header.component.css'
})

export class HeaderComponent{}