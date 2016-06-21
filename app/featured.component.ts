import { Component } from '@angular/core';

import {Observable} from 'rxjs/Rx';

import { FeaturedStream } from './featured-stream';
import { Channel } from './channel';
import { Stream } from './stream';
import { StreamService } from './stream.service'; 

@Component({
    selector: 'featured',
    templateUrl: 'app/featured.component.html'
})
export class FeaturedComponent {
    
    num: string;
    isLoading = false;

    streams = [];
    
    constructor(
        private _streamService: StreamService) {
    }
    
    getStreams(form) {
        this.num = form.value.num;
        this.streams = [];
        if (parseInt(this.num) > 0) {
            this.isLoading = true;
            this._streamService.getFeaturedStreams(this.num)
            .subscribe(
                data => {
                    this.isLoading = false;
                    for (var i = 0; i < data.featured.length; i++) {
                        // create new FeaturedStream object and add title and image
                        var newStream = new FeaturedStream;
                        newStream.title = data.featured[i]["title"];
                        newStream.image = data.featured[i]["image"];
                        
                        // get index of first closing p tag and throw away all data after that
                        var text = data.featured[i]["text"];
                        var idx = text.indexOf("<\/p>");
                        newStream.text = text.substring(0, idx);
                        
                        // create new Stream and Channel objects, chain together and add to FeaturedStream object
                        newStream.stream = new Stream;
                        newStream.stream.channel = new Channel;
                        newStream.stream.channel.url = data.featured[i].stream.channel.url;

                        // add FeaturedStream object to array of streams, ready to be displayed
                        this.streams.push(newStream);
                    }
                });
        }
    }
}