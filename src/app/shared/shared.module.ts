import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { TranslateModule } from '@ngx-translate/core';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { DataTableComponent } from './component/data-table/data-table.component';
import { IRangePickerComponent } from './component/i-range-picker/i-range-picker.component';
import { SearchCriteriaComponent } from './component/search-criteria/search-criteria.component';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ThemeComponent } from './component/theme/theme.component';
import { CiyunComponent } from './charts/ciyun/ciyun.component';
import { ThreeBarComponent } from './charts/three-bar/three-bar.component';
import { ChinaDataMapComponent } from './charts/china-data-map/china-data-map.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { KeShiHuaComponent } from './component/ke-shi-hua/ke-shi-hua.component';
import { EventDetailsComponent } from './component/event-details/event-details.component';

// #region third libs
// import { NgxTinymceModule } from 'ngx-tinymce';
// import { UEditorModule } from 'ngx-ueditor';

const THIRDMODULES: Type<any>[] = [];
// #endregion

// #region your componets & directives
const COMPONENTS: Type<any>[] = [];
const DIRECTIVES: Type<any>[] = [];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonACLModule,
    DelonFormModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    NzTreeModule,
  ],
  declarations: [
    // your components
    PieChartComponent,
    BarChartComponent,
    ...COMPONENTS,
    ...DIRECTIVES,
    DataTableComponent,
    SearchCriteriaComponent,
    IRangePickerComponent,
    BarChartComponent,
    LineChartComponent,
    ThemeComponent,
    CiyunComponent,
    ThreeBarComponent,
    ChinaDataMapComponent,
    RadarChartComponent,
    KeShiHuaComponent,
    IRangePickerComponent,
    EventDetailsComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonACLModule,
    DelonFormModule,
    TranslateModule,
    PieChartComponent,
    BarChartComponent,
    DataTableComponent,
    SearchCriteriaComponent,
    IRangePickerComponent,
    BarChartComponent,
    LineChartComponent,
    ThemeComponent,
    CiyunComponent,
    ThreeBarComponent,
    ChinaDataMapComponent,
    RadarChartComponent,
    KeShiHuaComponent,
    IRangePickerComponent,
    EventDetailsComponent,

    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [DatePipe],
})
export class SharedModule {}
