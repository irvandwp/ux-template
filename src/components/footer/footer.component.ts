import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public social = [
        {
            url: 'https://facebook.com',
            icon: 'https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg',
        },
        {
            url: 'https://www.linkedin.com/in/irvan-dptr/',
            icon: 'https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg',
        },
        {
            url: 'https://twitter.com/',
            icon: 'https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg',
        }
    ]
    constructor() { }

    ngOnInit(): void {
    }

    socialOnClick(url: string) {
        window.open(url,'_blank');
    }

}
