import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Stream } from './stream';
import { StreamCollection } from './stream-collection';

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

    getStream(channel: string) {
        return this._http.get("https://api.twitch.tv/kraken/streams/" + channel)
            .map(res => { return [res.json(), channel]});
    }

    getCustomStreams(game?: string, channels?: string, limit?: number, stream_type?: string, language?: string) {
        console.log("test");
    }
}