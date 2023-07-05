/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-03-15 18:23:34
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-05 12:39:12
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@env/environment';

import { DefaultComponent } from '../layout/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule) },
      { path: 'statute', loadChildren: () => import('./statute/statute.module').then((m) => m.StatuteModule) },
      {
        path: 'articleDetails',
        loadChildren: () => import('./article-details/article-details.module').then((m) => m.ArticleDetailsModule),
      },
      {
        path: 'publicSentiment',
        loadChildren: () => import('./public-sentiment/public-sentiment.module').then((m) => m.PublicSentimentModule),
      },
      { path: 'jianbao', loadChildren: () => import('./data-jianbao/data-jianbao.module').then((m) => m.DataJianbaoModule) },
      { path: 'tongji', loadChildren: () => import('./tongji-fenxi/tongji-fenxi.module').then((m) => m.TongjiFenxiModule) },
      { path: 'zhuti', loadChildren: () => import('./zhuti-peizhi/zhuti-peizhi.module').then((m) => m.ZhutiPeizhiModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then((m) => m.UsersModule) },
      { path: 'persons-center', loadChildren: () => import('./persons-center/persons-center.module').then((m) => m.PersonsCenterModule) },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
