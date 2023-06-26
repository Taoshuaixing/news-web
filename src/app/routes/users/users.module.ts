import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KAdminToolsLibModule } from 'kkk-lib';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { DepartManagerComponent } from './depart-manager/depart-manager.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent, DepartManagerComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule, KAdminToolsLibModule, NzCardModule, NzTabsModule]
})
export class UsersModule {}
