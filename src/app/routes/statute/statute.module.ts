import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import {DataSearchModule} from '../data-search/data-search.module';
import { StatuteRoutingModule } from './statute-routing.module';
import { StatuteComponent } from './statute/statute.component';

const COMPONENTS: Type<void>[] = [StatuteComponent];

@NgModule({
    imports: [SharedModule, StatuteRoutingModule, DataSearchModule],
  declarations: [...COMPONENTS],
})
export class StatuteModule {}
