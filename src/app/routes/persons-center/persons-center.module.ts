import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { PersonsCenterRoutingModule } from './persons-center-routing.module';
import { PersonsCenterComponent } from './persons-center/persons-center.component';
import { SettingComponent } from './setting/setting.component';
import { UserDatabaseComponent } from './user-database/user-database.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { UserCollectionComponent } from './user-collection/user-collection.component';

const COMPONENTS: Type<void>[] = [PersonsCenterComponent, SettingComponent, UserDatabaseComponent, UserCollectionComponent];

@NgModule({
  imports: [
    SharedModule,
    PersonsCenterRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  declarations: COMPONENTS,
})
export class PersonsCenterModule {}
