import {NgModule} from '@angular/core';
import {routing} from './default.routing';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component'
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        routing,
        TranslateModule,
    ],
    declarations: [
        HomepageComponent,
    ]
})

export class DefaultModule {
}
