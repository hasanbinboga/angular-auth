import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'', component: AppComponent , canActivate: [AuthGuard]},
  {path:'main', component: MainComponent, canActivate: [AuthGuard]},
  
  {
    path: 'account', children:
        [
            { path: '', loadChildren: () => import('../../src/app/account/account.module').then(m => m.AccountModule) },
        ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
