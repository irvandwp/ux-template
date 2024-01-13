import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public navbarItem = [
        { path: 'home', name: 'Home' },
        { path: 'videos', name: 'Videos' },
        { path: '-', name: 'People' },
        { path: '-', name: 'Documents' },
        { path: '-', name: 'Events' },
        { path: '-', name: 'Communities' },
        { path: '-', name: 'Favorites' },
        { path: '-', name: 'Channels' }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    public checkRouter(path: string) {
        if (path === '-') {
            alert('This screen not available yet')
            return;
        }
    }

}
