import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import {KeywordRuleComponent} from './keyword-rule/keyword-rule.component';
import {TopicComponent} from './topic/topic.component';
import { ZhutiPeizhiRoutingModule } from './zhuti-peizhi-routing.module';
import { ZhutiPeizhiComponent } from './zhuti-peizhi/zhuti-peizhi.component';

const COMPONENTS: Type<void>[] = [ZhutiPeizhiComponent,TopicComponent,KeywordRuleComponent];

@NgModule({
  imports: [SharedModule, ZhutiPeizhiRoutingModule],
  declarations: COMPONENTS,
})
export class ZhutiPeizhiModule {}
