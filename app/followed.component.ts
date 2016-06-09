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

    offlineChannels = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp",
                        "storbeck", "habathcx", "robotcaleb", "noobs2ninjas"];

    status: string = "online";

    getAllChannels() {

        this.channelObjects = [];
        
        for (var i = 0; i < this.followedChannels.length; i++) {
            this._streamService.getFollowedChannels(this.followedChannels[i])
                .subscribe(
                    data => {
                        this.channelObjects.push(data);
                });
        }
    }

    getOfflineChannels() {

        this.channelObjects = [];
        
        for (var i = 0; i < this.offlineChannels.length; i++) {
            this._streamService.getFollowedChannels(this.offlineChannels[i])
                .subscribe(
                    data => {
                        this.channelObjects.push(data);
                });
        }
    }

    getStreams(option: string) {
        
        this.channelObjects = [];

        for (var i = 0; i < this.followedChannels.length; i++) {
            this._streamService.getStreams(this.followedChannels[i])
                .subscribe(
                    data => {
                        if (data.stream !== null && option === "online") {
                            this.channelObjects.push(data.stream.channel);
                        } else if (data.stream !== null && option === "offline") {
                            var index = this.offlineChannels.indexOf(data.stream.channel);
                            this.offlineChannels.splice(index, 1);
                            console.log(i);
                        }
                });
        }
    }

    getOfflineStreams() {
        this.getStreams("offline");
        this.getOfflineChannels();
    }
}