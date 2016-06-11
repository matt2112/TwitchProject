import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Stream } from './stream';
import { StreamCollection } from './stream-collection';
// import { STREAMS } from './mock-streams';

@Injectable()
export class StreamService {
    
    constructor(private _http: Http) {        
    }
    
    getFeaturedStreams(limit: string) : Observable<StreamCollection> {
        
        var url = "https://api.twitch.tv/kraken/streams/featured";
        
        var limit = "?limit=" + limit;
        
        return this._http.get(url + limit)
            .map(res => res.json());

    }
    
    getChannel(channel: string) {
        
        return this._http.get("https://api.twitch.tv/kraken/channels/" + channel)
            .map(res => res.json());

    }

    getStreams(channels: any, status: string) {
        var streams = [];
        for (var i = 0; i < channels.length; i++) {
            streams.push(this._http.get("https://api.twitch.tv/kraken/streams/" + channels[i])
                .map(res => res.json()));
        }
        return streams;
    }
}