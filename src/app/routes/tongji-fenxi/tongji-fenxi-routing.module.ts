import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFenxiComponent } from './tongji/data-fenxi/data-fenxi.component';
import { DatasTongjiComponent } from './tongji/datas-tongji/datas-tongji.component';
import { TongjiComponent } from './tongji/tongji.component';
import { ZimaoquDuibiComponent } from './tongji/zimaoqu-duibi/zimaoqu-duibi.component';

const routes: Routes = [
  {
    path: '',
    component: TongjiComponent,
    children: [
      { path: '', redirectTo: 'datas-tongji', pathMatch: 'full' },
      { path: 'datas-tongji', component: DatasTongjiComponent },
      { path: 'zimaoqu-fenxi', component: ZimaoquDuibiComponent },
      { path: 'data-fenxi', component: DataFenxiComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TongjiFenxiRoutingModule {}
