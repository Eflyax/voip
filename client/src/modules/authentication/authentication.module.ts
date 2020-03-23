import {NgModule} from '@angular/core';
import {routing} from './authentication.routing';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration/registration.component'
import {RegistrationFormComponent} from './registration/forms/registrationForm'
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../core/app.module';

@NgModule({
    imports: [
        CommonModule,
        routing,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    declarations: [
        RegistrationComponent,
        RegistrationFormComponent,
    ]
})

export class AuthenticationModule {

}
