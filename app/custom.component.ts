import { Component } from '@angular/core';

import { StreamService } from './stream.service';

@Component({
    selector: 'custom',
    templateUrl: 'app/custom.component.html'
})
export class CustomComponent {

    channelObjects = [];
    isLoading = false;

    constructor(
        private _streamService: StreamService) {
    }

    // Obtains custom stream using parameters inputted via html form.
    getCustomStreams(form) {

        this.channelObjects = [];

        var game = form.value.game ? form.value.game : "";
        var channels = form.value.channels ? form.value.channels : "";
        var limit = form.value.limit ? form.value.limit : "";
        var stream_type = form.value.streamType ? form.value.streamType : "";
        var language = form.value.language ? form.value.language : "";

        if (parseInt(limit) > 0) {
            this.isLoading = true;
            this._streamService.getCustomStreams(game, channels, limit, stream_type, language)
                .subscribe(
                    data => {
                        this.isLoading = false;
                        for (var i = 0; i < data.streams.length; i++) {
                            this.channelObjects.push(data.streams[i].channel);
                        }
                    });
        }
    }
}