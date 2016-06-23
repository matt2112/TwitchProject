import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

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
    errorObjects = [];

    followedChannels = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp", "storbeck",
                        "habathcx", "robotcaleb", "noobs2ninjas", "brunofin", "comster404"]; 
    
    // Adds channel string to followedChannels array if not already present.
    addChannel(form) {
        var addMe = form.value.add;
        if (this.followedChannels.indexOf(addMe) === -1) {
            this.followedChannels.push(addMe);
            this.getChannels("all");
        }
    }

    // Removes channel string from followedChannels array if not present.
    removeChannel(form) {
        var removeMe = form.value.remove;
        var idx = this.followedChannels.indexOf(removeMe);
        if (idx >= 0) {
            this.followedChannels.splice(idx, 1);
            this.getChannels("all");
        }
    }

    // Gets channel data when live stream unavailable.
    getOfflineChannel(channel) {
        this._streamService.getChannel(channel)
            .subscribe(data => {
                data.online = false;
                this.channelObjects.push(data);
            });
    }

    // Processes Observable returned from service via getChannels method.
    handleData(option, data) {
        if (data[0]) {
            // If stream data unavailable then use getOfflineChannel method to get data instead. 
            if (data[0].stream === null && (option === "offline" || option === "all")) {
                this.getOfflineChannel(data[1]);
            // If stream data available, channel object can be obtained directly.
            } else if (data[0].stream !== null && (option === "online" || option === "all")) {
                data[0].stream.channel.online = true;
                this.channelObjects.push(data[0].stream.channel);
            }
        }
    }

    // Processes error strings.
    handleError(error: string) {
        var newError = JSON.parse(error);
        this.errorObjects.push(newError);
    }

    // Removes old data and subscribes to service using all, online or offline options.
    getChannels(option: string) {
        this.channelObjects = [];
        this.errorObjects = [];

        for (var i = 0; i < this.followedChannels.length; i++) {
            this._streamService.getStream(this.followedChannels[i])
                .subscribe(
                    data => this.handleData(option, data),
                    error =>  this.handleError(error)
                );
        }
    }

}