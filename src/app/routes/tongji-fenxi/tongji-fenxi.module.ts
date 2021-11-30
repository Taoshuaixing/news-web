import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { TongjiFenxiRoutingModule } from './tongji-fenxi-routing.module';
import { DataFenxiComponent } from './tongji/data-fenxi/data-fenxi.component';
import { DatasTongjiComponent } from './tongji/datas-tongji/datas-tongji.component';
import { TongjiComponent } from './tongji/tongji.component';
import { ZimaoquDuibiComponent } from './tongji/zimaoqu-duibi/zimaoqu-duibi.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

const COMPONENTS: Type<void>[] = [TongjiComponent, DataFenxiComponent, DatasTongjiComponent, ZimaoquDuibiComponent];

@NgModule({
  imports: [
    SharedModule,
    TongjiFenxiRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  declarations: COMPONENTS,
})
export class TongjiFenxiModule {}
