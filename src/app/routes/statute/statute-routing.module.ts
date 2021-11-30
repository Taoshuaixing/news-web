import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatuteComponent } from './statute/statute.component';

const routes: Routes = [{ path: '', component: StatuteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatuteRoutingModule {}
