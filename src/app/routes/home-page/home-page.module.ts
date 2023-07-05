/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-03-15 18:23:34
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-05 10:55:33
 */
import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { NgxEchartsModule } from 'ngx-echarts';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import * as echarts from 'echarts';

const COMPONENTS: Type<void>[] = [HomePageComponent];

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  declarations: [...COMPONENTS],
})
export class HomePageModule {}
