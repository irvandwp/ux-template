import { Component, OnInit } from '@angular/core';
import { CHANNEL_DATA } from '../../shared/dummyData/channel-data';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

    public channelData = CHANNEL_DATA;
    constructor() { }

    ngOnInit(): void {
    }

}
