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
                }
                FollowedComponent.prototype.getOfflineChannel = function (channel) {
                    var _this = this;
                    this._streamService.getChannel(channel)
                        .subscribe(function (data) {
                        data.online = false;
                        _this.channelObjects.push(data);
                    });
                };
                FollowedComponent.prototype.getChannels = function (option) {
                    var _this = this;
                    this.channelObjects = [];
                    for (var i = 0; i < this.followedChannels.length; i++) {
                        this._streamService.getStream(this.followedChannels[i])
                            .subscribe(function (data) {
                            if (data[0].stream === null && (option === "offline" || option === "all")) {
                                _this.getOfflineChannel(data[1]);
                            }
                            else if (data[0].stream !== null && (option === "online" || option === "all")) {
                                data[0].stream.channel.online = true;
                                _this.channelObjects.push(data[0].stream.channel);
                            }
                        });
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
//# sourceMappingURL=followed.component.js.map