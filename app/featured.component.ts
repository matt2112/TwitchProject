import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';

import { Stream } from './stream';
import { StreamCollection } from './stream-collection';
import { StreamService } from './stream.service'; 

@Component({
    selector: 'featured',
    templateUrl: 'app/featured.component.html'
})
export class FeaturedComponent {
    
    data: StreamCollection;
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
                        var newStream = new Stream;
                        newStream.title = data.featured[i]["title"];
                        newStream.text = data.featured[i]["text"];
                        newStream.image = data.featured[i]["image"];
                        this.streams.push(newStream);
                    }
                });
        }
    }
}