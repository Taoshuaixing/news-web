import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuanboComponent } from './data-jianbao/chuanbo/chuanbo.component';
import { DataJianbaoComponent } from './data-jianbao/data-jianbao.component';
import { DiyuFenbuComponent } from './data-jianbao/diyu-fenbu/diyu-fenbu.component';
import { QingbaoComponent } from './data-jianbao/qingbao/qingbao.component';
import { ZimaoquComponent } from './data-jianbao/zimaoqu/zimaoqu.component';

const routes: Routes = [
  {
    path: '',
    component: DataJianbaoComponent,
    children: [
      { path: '', redirectTo: 'qingbao', pathMatch: 'full' },
      { path: 'qingbao', component: QingbaoComponent },
      { path: 'chuanbo', component: ChuanboComponent },
      { path: 'diyufenbu', component: DiyuFenbuComponent },
      { path: 'zimaoqu', component: ZimaoquComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataJianbaoRoutingModule {}
