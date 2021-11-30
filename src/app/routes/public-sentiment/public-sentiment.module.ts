import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { DataSearchModule } from '../data-search/data-search.module';
import { PublicSentimentRoutingModule } from './public-sentiment-routing.module';
import { PublicSentimentComponent } from './public-sentiment/public-sentiment.component';

const COMPONENTS: Type<void>[] = [PublicSentimentComponent];

@NgModule({
  imports: [SharedModule, PublicSentimentRoutingModule, DataSearchModule],
  declarations: [...COMPONENTS],
})
export class PublicSentimentModule {}
