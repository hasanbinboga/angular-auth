import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account', data: { title: 'Menu Routes' }, children:
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
