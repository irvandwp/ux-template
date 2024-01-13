import { Component, OnInit } from '@angular/core';
import { ACTIVITY_DATA } from '../../shared/dummyData/activity-data';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

    public activityData = ACTIVITY_DATA;
    constructor() { }

    ngOnInit(): void {
    }

}
