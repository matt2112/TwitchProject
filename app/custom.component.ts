import { Component } from '@angular/core';

import { StreamService } from './stream.service';

@Component({
    selector: 'custom',
    templateUrl: 'app/custom.component.html'
})
export class CustomComponent {

    constructor(
        private _streamService: StreamService) {
    }

    getCustomStreams(game, channels, limit, stream_type, language) {
        this._streamService.getCustomStreams(game, channels, limit, stream_type, language);
    }
}