import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CookieService } from 'ngx-cookie-service';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonService } from '../passport/common.service';
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
