import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';

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
                        "storbeck", "habathcx", "robotcaleb", "noobs2ninjas", "brunofin"]; 
    
    errorMessage = "";

    getOfflineChannel(channel) {
        this._streamService.getChannel(channel)
            .subscribe(data => {
                data.online = false;
                this.channelObjects.push(data);
            });
    }

    handleData(option, data) {
        if (data[0]) {
            if (data[0].stream === null && (option === "offline" || option === "all")) {
                this.getOfflineChannel(data[1]);
            } else if (data[0].stream !== null && (option === "online" || option === "all")) {
                data[0].stream.channel.online = true;
                this.channelObjects.push(data[0].stream.channel);
            }
        }
    }

    getChannels(option: string) {
        this.channelObjects = [];

        for (var i = 0; i < this.followedChannels.length; i++) {
            this._streamService.getStream(this.followedChannels[i])
                .subscribe(
                    data => this.handleData(option, data),
                    error =>  console.log("test" + error)
                );
        }
    }

}