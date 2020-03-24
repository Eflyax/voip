import {TranslateService} from '@ngx-translate/core';
import {Component} from '@angular/core';

@Component({
    selector: 'my-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [
        './sidebar.component.css',
    ]
})

export class SidebarComponent {

    constructor(private translate: TranslateService) {
        translate.addLangs(['cs', 'en']);
        translate.setDefaultLang('cs');
        translate.use('cs');
    }

    changeLang(lang: string) {
        this.translate.use(lang);
    }
}
