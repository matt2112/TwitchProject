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
                    this.followedChannels = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp",
                        "storbeck", "habathcx", "robotcaleb", "noobs2ninjas"];
                    this.offlineChannels = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp",
                        "storbeck", "habathcx", "robotcaleb", "noobs2ninjas"];
                    this.status = "online";
                }
                FollowedComponent.prototype.getAllChannels = function () {
                    var _this = this;
                    this.channelObjects = [];
                    for (var i = 0; i < this.followedChannels.length; i++) {
                        this._streamService.getFollowedChannels(this.followedChannels[i])
                            .subscribe(function (data) {
                            _this.channelObjects.push(data);
                        });
                    }
                };
                FollowedComponent.prototype.getOfflineChannels = function () {
                    var _this = this;
                    this.channelObjects = [];
                    for (var i = 0; i < this.offlineChannels.length; i++) {
                        this._streamService.getFollowedChannels(this.offlineChannels[i])
                            .subscribe(function (data) {
                            _this.channelObjects.push(data);
                        });
                    }
                };
                FollowedComponent.prototype.getStreams = function (option) {
                    var _this = this;
                    this.channelObjects = [];
                    for (var i = 0; i < this.followedChannels.length; i++) {
                        this._streamService.getStreams(this.followedChannels[i])
                            .subscribe(function (data) {
                            if (data.stream !== null && option === "online") {
                                _this.channelObjects.push(data.stream.channel);
                            }
                            else if (data.stream !== null && option === "offline") {
                                var index = _this.offlineChannels.indexOf(data.stream.channel);
                                _this.offlineChannels.splice(index, 1);
                                console.log(i);
                            }
                        });
                    }
                };
                FollowedComponent.prototype.getOfflineStreams = function () {
                    this.getStreams("offline");
                    this.getOfflineChannels();
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
//# sourceMappingURL=followed.component.js.map