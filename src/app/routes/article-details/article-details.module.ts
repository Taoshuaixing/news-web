import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ArticleDetailsRoutingModule } from './article-details-routing.module';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const COMPONENTS: Type<void>[] = [ArticleDetailsComponent];

@NgModule({
  imports: [SharedModule, ArticleDetailsRoutingModule],
  declarations: COMPONENTS,
})
export class ArticleDetailsModule {}
