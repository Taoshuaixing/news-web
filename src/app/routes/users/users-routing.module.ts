import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartManagerComponent } from './depart-manager/depart-manager.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', redirectTo: 'depart', pathMatch: 'full' },
      {
        path: 'depart',
        component: DepartManagerComponent,
        data: { title: '企业账号管理', titleI18n: '企业账号管理' }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
