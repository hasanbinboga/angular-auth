import { NgModule } from '@angular/core';
import { ShareddModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    imports: [
        AccountRoutingModule,
        ShareddModule,
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
    ],
    exports: [
    ]
})
export class AccountModule { }
