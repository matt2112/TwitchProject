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
                        var newStream = new FeaturedStream;
                        newStream.title = data.featured[i]["title"];
                        newStream.text = data.featured[i]["text"];
                        var idx = newStream.text.indexOf("<\/p>");
                        newStream.text = newStream.text.substring(0, idx);
                        newStream.image = data.featured[i]["image"];
                        console.log(data);
                        //newStream.stream.channel.url = data.featured[i].stream.channel.url;
                        //console.log(newStream.stream.channel.url);
                        this.streams.push(newStream);
                    }
                });
        }
    }
}