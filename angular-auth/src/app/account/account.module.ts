import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ShareddModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AccountService } from './services/account.service';

@NgModule({
    imports: [
        AccountRoutingModule,
        ShareddModule,
        ReactiveFormsModule 
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
        AccountService,
        FormBuilder
    ],
    exports: [
    ]
})
export class AccountModule { }
