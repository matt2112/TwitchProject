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
    streamObjects = [];
    count = 0;

    followedChannels = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp",
                        "storbeck", "habathcx", "robotcaleb", "noobs2ninjas"];

    getAllChannels() {

        this.channelObjects = [];
        
        for (var i = 0; i < this.followedChannels.length; i++) {
            this._streamService.getChannel(this.followedChannels[i])
                .subscribe(
                    data => {
                        if (5 < 7) {
                            this.channelObjects.push(data);
                        }
                });
        }
    }

    addStream(stream) {
        this.streamObjects.push(stream);
    }

    getChannel(channel) {
        this._streamService.getChannel(channel)
            .subscribe(data => this.channelObjects.push(data));
    }

    testStreams(status: string) {
        var channels = ["freecodecamp", "esl_sc2", "ogamingsc2"];
        var test = this._streamService.getStreams(channels, status);
        var testStreams = [];
        
        for (var i = 0; i < test.length; i++) {
            console.log(test[i].subscribe(data => { data }));
        }
    }


}

/**
 * 
 * 
 * 
 *                 var why = 'nya';
                if (status === 'online' && data.stream !== null) {
                    console.log(data);
                    return data;
                } else if (status === 'offline' && data.stream === null) {
                    console.log(why);
                    this.channelObjects.push(data);
                    return data;
                }
 */