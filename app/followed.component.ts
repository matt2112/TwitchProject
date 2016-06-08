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

    channels = [];
    
    getAllChannels() {

        this.channels = [];
        var followedChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
                                 "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

        for (var i = 0; i < followedChannels.length; i++) {
            this._streamService.getFollowedChannels(followedChannels[i])
                .subscribe(
                    data => {
                        this.channels.push(data);
                        // console.log(data);
                });
            
        }

        for (var i = 0; i < followedChannels.length; i++) {
            this._streamService.checkChannelOnline(followedChannels[i])
                .subscribe(
                    data => {
                        console.log(data);
                });
            
        }

        
    }
}