System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/observable/throw'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var StreamService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            StreamService = (function () {
                function StreamService(_http) {
                    this._http = _http;
                    this.clientid = "q7wctgvg9bz3kd0srxrecx57i6izxa2";
                }
                // Gets streams as featured by Twitch API.
                StreamService.prototype.getFeaturedStreams = function (limit) {
                    var url = "https://api.twitch.tv/kraken/streams/featured";
                    return this._http.get(url + "?limit=" + limit + "&client_id=" + this.clientid)
                        .map(function (res) { return res.json(); });
                };
                // Gets data about a single channel and converts to json format.
                StreamService.prototype.getChannel = function (channel) {
                    return this._http.get("https://api.twitch.tv/kraken/channels/" + channel + "?client_id=" + this.clientid)
                        .map(function (res) { return res.json(); });
                };
                // Handles any errors and returns an Observable which can be processed by a subscribe method.
                StreamService.prototype.handleError = function (error) {
                    var errMsg = error._body;
                    return Observable_1.Observable.throw(errMsg);
                };
                // Gets data about a single stream and converts to json format. Also returns name of channel. 
                StreamService.prototype.getStream = function (channel) {
                    return this._http.get("https://api.twitch.tv/kraken/streams/" + channel + "?client_id=" + this.clientid)
                        .map(function (res) {
                        return [res.json(), channel];
                    })
                        .catch(this.handleError);
                };
                // Gets data of custom streams using optional parameters.
                StreamService.prototype.getCustomStreams = function (game, channels, limit, stream_type, language) {
                    var url = "https://api.twitch.tv/kraken/streams?game=" + game + "&limit=" + limit
                        + "&stream_type=" + stream_type + "&language=" + language + "&client_id=" + this.clientid;
                    if (channels !== "") {
                        url += "&channel=" + channels;
                    }
                    return this._http.get(url)
                        .map(function (res) { return res.json(); });
                };
                StreamService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StreamService);
                return StreamService;
            }());
            exports_1("StreamService", StreamService);
        }
    }
});
//# sourceMappingURL=stream.service.js.map