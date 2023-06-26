import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicSentimentComponent } from './public-sentiment/public-sentiment.component';

const routes: Routes = [
  {path:'',component:PublicSentimentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSentimentRoutingModule { }
