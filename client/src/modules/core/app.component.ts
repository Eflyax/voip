import {TranslateService} from '@ngx-translate/core';
import {Component} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
    selector: 'my-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
    ]
})

export class AppComponent {
    title = 'Ometyst';

    constructor(private translate: TranslateService) {
        translate.addLangs(['cs', 'en']);
        translate.setDefaultLang('cs');
        translate.use('cs');
    }

    changeLang(lang: string) {
        this.translate.use(lang);
    }
}
