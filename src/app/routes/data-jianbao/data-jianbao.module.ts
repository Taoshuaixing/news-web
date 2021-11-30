import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { DataJianbaoRoutingModule } from './data-jianbao-routing.module';
import { ChuanboComponent } from './data-jianbao/chuanbo/chuanbo.component';
import { DataJianbaoComponent } from './data-jianbao/data-jianbao.component';
import { DiyuFenbuComponent } from './data-jianbao/diyu-fenbu/diyu-fenbu.component';
import { QingbaoComponent } from './data-jianbao/qingbao/qingbao.component';
import { ZimaoquComponent } from './data-jianbao/zimaoqu/zimaoqu.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

const COMPONENTS: Type<void>[] = [DataJianbaoComponent, ChuanboComponent, DiyuFenbuComponent, QingbaoComponent, ZimaoquComponent];

@NgModule({
  imports: [
    SharedModule,
    DataJianbaoRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  declarations: COMPONENTS,
})
export class DataJianbaoModule {}
