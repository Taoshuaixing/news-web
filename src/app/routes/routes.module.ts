/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-03-15 18:23:34
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-05 11:01:52
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
// dashboard pages
import { KAdminToolsLibModule } from 'kkk-lib';

import { RouteRoutingModule } from './routes-routing.module';

@NgModule({
  imports: [SharedModule, RouteRoutingModule, KAdminToolsLibModule],
})
export class RoutesModule {}
