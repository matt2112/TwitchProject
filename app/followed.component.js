System.register(['@angular/core', './stream.service'], function(exports_1, context_1) {
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
    var core_1, stream_service_1;
    var FollowedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (stream_service_1_1) {
                stream_service_1 = stream_service_1_1;
            }],
        execute: function() {
            FollowedComponent = (function () {
                function FollowedComponent(_streamService) {
                    this._streamService = _streamService;
                    this.channelObjects = [];
                    this.streamObjects = [];
                    this.count = 0;
                    this.followedChannels = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp",
                        "storbeck", "habathcx", "robotcaleb", "noobs2ninjas"];
                }
                FollowedComponent.prototype.getAllChannels = function () {
                    var _this = this;
                    this.channelObjects = [];
                    for (var i = 0; i < this.followedChannels.length; i++) {
                        this._streamService.getChannel(this.followedChannels[i])
                            .subscribe(function (data) {
                            if (5 < 7) {
                                _this.channelObjects.push(data);
                            }
                        });
                    }
                };
                FollowedComponent.prototype.addStream = function (stream) {
                    this.streamObjects.push(stream);
                };
                FollowedComponent.prototype.getChannel = function (channel) {
                    var _this = this;
                    this._streamService.getChannel(channel)
                        .subscribe(function (data) { return _this.channelObjects.push(data); });
                };
                FollowedComponent.prototype.testStreams = function (status) {
                    var channels = ["freecodecamp", "esl_sc2", "ogamingsc2"];
                    var test = this._streamService.getStreams(channels, status);
                    var testStreams = [];
                    for (var i = 0; i < test.length; i++) {
                        console.log(test[i].subscribe(function (data) { data; }));
                    }
                };
                FollowedComponent = __decorate([
                    core_1.Component({
                        selector: 'followed',
                        templateUrl: 'app/followed.component.html'
                    }), 
                    __metadata('design:paramtypes', [stream_service_1.StreamService])
                ], FollowedComponent);
                return FollowedComponent;
            }());
            exports_1("FollowedComponent", FollowedComponent);
        }
    }
});
/**
 *
 *
 *
 *                 var why = 'nya';
                if (status === 'online' && data.stream !== null) {
                    console.log(data);
                    return data;
                } else if (status === 'offline' && data.stream === null) {
                    console.log(why);
                    this.channelObjects.push(data);
                    return data;
                }
 */ 
//# sourceMappingURL=followed.component.js.map