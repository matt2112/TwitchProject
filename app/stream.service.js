System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var StreamService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            // import { STREAMS } from './mock-streams';
            StreamService = (function () {
                function StreamService(_http) {
                    this._http = _http;
                }
                StreamService.prototype.getFeaturedStreams = function (limit) {
                    var url = "https://api.twitch.tv/kraken/streams/featured";
                    var limit = "?limit=" + limit;
                    return this._http.get(url + limit)
                        .map(function (res) { return res.json(); });
                    //return Promise.resolve(STREAMS);
                };
                StreamService.prototype.getFollowedChannels = function (channel) {
                    return this._http.get("https://api.twitch.tv/kraken/channels/" + channel)
                        .map(function (res) { return res.json(); });
                };
                StreamService.prototype.checkChannelOnline = function (channel) {
                    return this._http.get("https://api.twitch.tv/kraken/streams/" + channel)
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