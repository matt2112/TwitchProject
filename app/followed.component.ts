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
    
    data: StreamCollection;
    
    monkey: string;
    
    streams = [];
    
    constructor(
        private _streamService: StreamService) {
    }
    
    getOnlineStreams() {
        console.log('newtesty');
        this._streamService.getFollowedStreams()
            .subscribe(
                data => {
                console.log(data);
            });
    }
    
    getAllChannels() {
        console.log("test");
    }
}