import { Component, ViewChild } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { FeaturedComponent } from './featured.component';
import { FollowedComponent } from './followed.component';
import { CustomComponent } from './custom.component';
import { StreamService } from './stream.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        FeaturedComponent,
        FollowedComponent,
        CustomComponent
    ],
    providers: [
        StreamService,
        HTTP_PROVIDERS
    ]
})
export class AppComponent {
    //@ViewChild(FeaturedListComponent) featuredList : FeaturedListComponent;
    //@ViewChild(FollowedComponent) followedList : FollowedComponent;
    
    option: string;
    
    changeOptions(newOption) {
        if (newOption !== this.option) {
            this.option = newOption;
        } else {
            this.option = "";
        }
    }
}