import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { AuthGuardServiceGuard } from 'kkk-lib';

import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { LayoutBlankComponent } from '../layout/blank/blank.component';
import { DefaultComponent } from '../layout/default/default.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// single pages
import { CallbackComponent } from './passport/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserRegisterComponent } from './passport/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuardServiceGuard],
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
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [{ path: 'login', component: UserLoginComponent, data: { title: '登录', titleI18n: 'pro-login' } }],
  },
  // Blak Layout 空白布局
  /*   {
      path: 'data-v',
      component: LayoutBlankComponent,
      children: [{ path: '', loadChildren: () => import('./data-v/data-v.module').then((m) => m.DataVModule) }],
    }, 
  // passport
  { path: '', loadChildren: () => import('./passport/passport.module').then((m) => m.PassportModule) },
  { path: 'exception', loadChildren: () => import('./exception/exception.module').then((m) => m.ExceptionModule) },
  { path: '**', redirectTo: 'exception/404' },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
