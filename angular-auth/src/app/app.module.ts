import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';
import { AccountService } from './account/services/account.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AuthGuard } from './shared/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    ReactiveFormsModule 
  ],
  providers: [ AuthGuard,AccountService,
    FormBuilder ],
  bootstrap: [AppComponent]
})
export class AppModule { }
