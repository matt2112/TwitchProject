import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';

import { Stream } from './stream';
import { StreamCollection } from './stream-collection';
import { StreamService } from './stream.service'; 

@Component({
    selector: 'followed',
    templateUrl: 'app/followed.component.html'
})
export class FollowedComponent {
    
    constructor(
        private _streamService: StreamService) {
    }

    channelObjects = [];

    followedChannels = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp",
                        "storbeck", "habathcx", "robotcaleb", "noobs2ninjas"];

    getAllChannels() {

        this.channelObjects = [];
        
        for (var i = 0; i < this.followedChannels.length; i++) {
            this._streamService.getChannel(this.followedChannels[i])
                .subscribe(data => this.channelObjects.push(data));
        }
    }

    getChannel(channel) {
        this._streamService.getChannel(channel)
            .subscribe(data => this.channelObjects.push(data));
    }

    getChannelsByStatus(status: string) {
        this.channelObjects = [];

        for (var i = 0; i < this.followedChannels.length; i++) {
            this._streamService.getStream(this.followedChannels[i])
                .subscribe(data => {
                    if (data[0].stream === null && status === "offline") {
                        this.getChannel(data[1]);
                    } else if (data[0].stream !== null && status === "online") {
                        this.channelObjects.push(data[0].stream.channel);
                    }
                });
        }
    }


}