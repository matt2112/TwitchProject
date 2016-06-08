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

        //return Promise.resolve(STREAMS);
    }
    
    getFollowedStreams() {
        
        var url = "https://api.twitch.tv/kraken/streams?channel=OgamingSC2,freecodecamp";
        
        var streams = this._http.get(url)
            .map(res => res.json());
        
        console.log(streams);
        return streams;
    }
}