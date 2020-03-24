import {TranslateService} from '@ngx-translate/core';
import {Component} from '@angular/core';
import {ServerContentLoader} from './serverContentLoader';

@Component({
    selector: 'server-content',
    templateUrl: './serverContent.component.html',
    styleUrls: [
        './serverContent.component.css',
    ]
})

export class ServerContentComponent {

    roomList;

    constructor(
        private translate: TranslateService,
        private serverContentLoader: ServerContentLoader
    ) {
        translate.addLangs(['cs', 'en']);
        translate.setDefaultLang('cs');
        translate.use('cs');
    }

    changeLang(lang: string) {
        this.translate.use(lang);
    }

    ngOnInit() {
        this.roomList = this.serverContentLoader.getRoomList();
    }
}
