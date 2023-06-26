import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZhutiPeizhiComponent } from './zhuti-peizhi/zhuti-peizhi.component';

const routes: Routes = [{ path: '', component: ZhutiPeizhiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZhutiPeizhiRoutingModule {}
