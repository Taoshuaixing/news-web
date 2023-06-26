import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsCenterComponent } from './persons-center/persons-center.component';
import { SettingComponent } from './setting/setting.component';
import { UserCollectionComponent } from './user-collection/user-collection.component';
import { UserDatabaseComponent } from './user-database/user-database.component';

const routes: Routes = [
  {
    path: '',
    component: PersonsCenterComponent,
    children: [
      { path: '', redirectTo: 'database', pathMatch: 'full' },
      { path: 'setting', component: SettingComponent },
      { path: 'database', component: UserDatabaseComponent },
      { path: 'collection', component: UserCollectionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsCenterRoutingModule {}
