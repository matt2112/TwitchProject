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

    clientid = "q7wctgvg9bz3kd0srxrecx57i6izxa2";

    // Gets streams as featured by Twitch API.
    getFeaturedStreams(limit: string) : Observable<any> {
        
        const url = "https://api.twitch.tv/kraken/streams/featured";
        
        return this._http.get(url + "?limit=" + limit + "&client_id=" + this.clientid)
            .map(res => res.json());

    }
    
    // Gets data about a single channel and converts to json format.
    getChannel(channel: string) {
        
        return this._http.get("https://api.twitch.tv/kraken/channels/" + channel + "?client_id=" + this.clientid)
            .map(res => res.json());

    }

    // Handles any errors and returns an Observable which can be processed by a subscribe method.
    private handleError (error: any) {

        let errMsg = error._body;

        return Observable.throw(errMsg);

    }

    // Gets data about a single stream and converts to json format. Also returns name of channel. 
    getStream(channel: string) {

        return this._http.get("https://api.twitch.tv/kraken/streams/" + channel + "?client_id=" + this.clientid)
            .map(res => {
                return [res.json(), channel]
            })
            .catch(this.handleError);

    }

    // Gets data of custom streams using optional parameters.
    getCustomStreams(game: string, channels: string, limit: number, stream_type: string, language: string) {

        let url = "https://api.twitch.tv/kraken/streams?game=" + game + "&limit=" + limit
                                + "&stream_type=" + stream_type + "&language=" + language + "&client_id=" + this.clientid;
        
        if (channels !== "") {
            url += "&channel=" + channels;
        }

        return this._http.get(url)
            .map(res => res.json());
    }
    
}