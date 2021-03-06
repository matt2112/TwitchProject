System.register(['@angular/core', './channel', './featured-stream', './stream', './stream.service'], function(exports_1, context_1) {
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
    var core_1, channel_1, featured_stream_1, stream_1, stream_service_1;
    var FeaturedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (channel_1_1) {
                channel_1 = channel_1_1;
            },
            function (featured_stream_1_1) {
                featured_stream_1 = featured_stream_1_1;
            },
            function (stream_1_1) {
                stream_1 = stream_1_1;
            },
            function (stream_service_1_1) {
                stream_service_1 = stream_service_1_1;
            }],
        execute: function() {
            FeaturedComponent = (function () {
                function FeaturedComponent(_streamService) {
                    this._streamService = _streamService;
                    this.isLoading = false;
                    this.streams = [];
                }
                // Gets specified number of featured streams by subscribing to service.
                FeaturedComponent.prototype.getStreams = function (form) {
                    var _this = this;
                    this.num = form.value.num;
                    this.streams = [];
                    if (parseInt(this.num) > 0) {
                        this.isLoading = true;
                        this._streamService.getFeaturedStreams(this.num)
                            .subscribe(function (data) {
                            _this.isLoading = false;
                            for (var i = 0; i < data.featured.length; i++) {
                                // Create new FeaturedStream object and add title and image.
                                var newStream = new featured_stream_1.FeaturedStream;
                                newStream.title = data.featured[i]["title"];
                                newStream.image = data.featured[i]["image"];
                                // Get index of first closing p tag and throw away all data after that.
                                var text = data.featured[i]["text"];
                                var idx = text.indexOf("<\/p>");
                                newStream.text = text.substring(0, idx);
                                // Create new Stream and Channel objects, chain together and add to FeaturedStream object.
                                newStream.stream = new stream_1.Stream;
                                newStream.stream.channel = new channel_1.Channel;
                                newStream.stream.channel.url = data.featured[i].stream.channel.url;
                                // Add FeaturedStream object to array of streams, ready to be displayed.
                                _this.streams.push(newStream);
                            }
                        });
                    }
                };
                FeaturedComponent = __decorate([
                    core_1.Component({
                        selector: 'featured',
                        templateUrl: 'app/featured.component.html'
                    }), 
                    __metadata('design:paramtypes', [stream_service_1.StreamService])
                ], FeaturedComponent);
                return FeaturedComponent;
            }());
            exports_1("FeaturedComponent", FeaturedComponent);
        }
    }
});
//# sourceMappingURL=featured.component.js.map