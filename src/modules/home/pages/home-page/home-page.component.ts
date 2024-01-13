import { Component, OnInit } from '@angular/core';
import { VIDEO_CATEGORY, VIDEO_CONFIG, VIDEO_DATA } from '../../shared/dummyData/video-data';
import { Router } from '@angular/router';
import { PEOPLE_CATEGORY, PEOPLE_CONFIG, PEOPLE_DATA } from '../../shared/dummyData/people-data';
import { DOCUMENTS_CATEGORY, DOCUMENTS_CONFIG, DOCUMENTS_DATA } from '../../shared/dummyData/document-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    public videoData = VIDEO_DATA;
    public videoCategory = VIDEO_CATEGORY;
    public videoConfig = VIDEO_CONFIG;

    public peopleData = PEOPLE_DATA;
    public peopleCategory = PEOPLE_CATEGORY;
    public peopleConfig = PEOPLE_CONFIG;

    public documentCategory = DOCUMENTS_CATEGORY;
    public documentData = DOCUMENTS_DATA;
    public documentConfig = DOCUMENTS_CONFIG;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    public navigateTo(path: string): void {
        if(path) {
            this.router.navigate([path])
        } else {
            alert('on development');
        }
    }

}
