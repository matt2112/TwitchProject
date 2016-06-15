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
    var CustomComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (stream_service_1_1) {
                stream_service_1 = stream_service_1_1;
            }],
        execute: function() {
            CustomComponent = (function () {
                function CustomComponent(_streamService) {
                    this._streamService = _streamService;
                    this.channelObjects = [];
                    this.isLoading = false;
                }
                CustomComponent.prototype.getCustomStreams = function (form) {
                    var _this = this;
                    this.channelObjects = [];
                    var game = form.value.game ? form.value.game : "";
                    var channels = form.value.channels ? form.value.channels : "";
                    var limit = form.value.limit ? form.value.limit : "";
                    var stream_type = form.value.streamType ? form.value.streamType : "";
                    var language = form.value.language ? form.value.language : "";
                    this.channelObjects = [];
                    if (parseInt(limit) > 0) {
                        this.isLoading = true;
                        this._streamService.getCustomStreams(game, channels, limit, stream_type, language)
                            .subscribe(function (data) {
                            console.log(data);
                            _this.isLoading = false;
                            for (var i = 0; i < data.streams.length; i++) {
                                _this.channelObjects.push(data.streams[i].channel);
                            }
                        });
                    }
                };
                CustomComponent = __decorate([
                    core_1.Component({
                        selector: 'custom',
                        templateUrl: 'app/custom.component.html'
                    }), 
                    __metadata('design:paramtypes', [stream_service_1.StreamService])
                ], CustomComponent);
                return CustomComponent;
            }());
            exports_1("CustomComponent", CustomComponent);
        }
    }
});
//# sourceMappingURL=custom.component.js.map