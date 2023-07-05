import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { LayoutDefaultModule } from '@delon/theme/layout-default';
import { SettingDrawerModule } from '@delon/theme/setting-drawer';
import { ThemeBtnModule } from '@delon/theme/theme-btn';
import { TranslateModule } from '@ngx-translate/core';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { SharedModule } from '@shared';
import { DefaultComponent } from './default/default.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ThemeBtnModule,
    SettingDrawerModule,
    LayoutDefaultModule,
    TranslateModule,
    NoticeIconModule,
    GlobalFooterModule,
    NzAutocompleteModule,
    SharedModule,
  ],
  declarations: [DefaultComponent],
  providers: [DatePipe],
})
export class LayoutModule {}
