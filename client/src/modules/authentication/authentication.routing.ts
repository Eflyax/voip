import {RegistrationComponent} from './registration/registration.component'
import {RouterModule, Routes} from '@angular/router'
import {ModuleWithProviders} from '@angular/core'

export const routes: Routes = [
    {path: 'registration', component: RegistrationComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
