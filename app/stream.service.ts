import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { FeaturedStream } from './featured-stream';

@Injectable()
export class StreamService {
    
    constructor(private _http: Http) {        
    }
    
    // Gets streams as featured by Twitch API.
    getFeaturedStreams(limit: string) : Observable<any> {
        
        var url = "https://api.twitch.tv/kraken/streams/featured";
        
        var limit = "?limit=" + limit;
        
        return this._http.get(url + limit)
            .map(res => res.json());

    }
    
    // Gets data about a single channel and converts to json format.
    getChannel(channel: string) {
        
        return this._http.get("https://api.twitch.tv/kraken/channels/" + channel)
            .map(res => res.json());

    }

    // Handles any errors and returns an Observable which can be processed by a subscribe method.
    private handleError (error: any) {

        let errMsg = error._body;

        return Observable.throw(errMsg);

    }

    // Gets data about a single stream and converts to json format. Also returns name of channel. 
    getStream(channel: string) {

        return this._http.get("https://api.twitch.tv/kraken/streams/" + channel)
            .map(res => {
                return [res.json(), channel]
            })
            .catch(this.handleError);

    }

    // Gets data of custom streams using optional parameters.
    getCustomStreams(game: string, channels: string, limit: number, stream_type: string, language: string) {

        var url = "https://api.twitch.tv/kraken/streams" + "?game=" + game + "&limit=" + limit
                                                         + "&stream_type=" + stream_type + "&language=" + language;
        
        if (channels !== "") {
            url += "&channel=" + channels;
        }

        return this._http.get(url)
            .map(res => res.json());
    }
    
}