import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPassportComponent } from '../../layout/passport/passport.component';
import { CallbackComponent } from './callback.component';
import { UserLockComponent } from './lock/lock.component';
import { UserLoginComponent } from './login/login.component';
import { UserRegisterResultComponent } from './register-result/register-result.component';
import { UserRegisterComponent } from './register/register.component';

const routes: Routes = [
  // passport

  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent,
        data: { title: '登录', titleI18n: 'app.login.login' },
      },
      {
        path: 'register',
        component: UserRegisterComponent,
        data: { title: '注册', titleI18n: 'app.register.register' },
      },
      {
        path: 'register-result',
        component: UserRegisterResultComponent,
        data: { title: '注册结果', titleI18n: 'app.register.register' },
      },
      {
        path: 'lock',
        component: UserLockComponent,
        data: { title: '锁屏', titleI18n: 'app.lock' },
      },
    ],
  },

  // 单页不包裹Layout
  // {
  //   path: 'passport',
  //   component: PassportLayoutComponent,
  //   children: [
  //
  //     // { path: 'login', component: LayoutPassportComponent, data: { title: '登录' } }, //默认登录跳转到门户页面
  //     { path: 'login', component: LoginComponent, data: { title: '登录' } },//默认不跳转
  //     { path: 'register', component: UserRegisterComponent, data: { title: '注册' } },
  //     { path: 'register-result', component: UserRegisterResultComponent, data: { title: '注册结果' } },
  //     { path: 'lock', component: UserLockComponent, data: { title: '锁屏' } },
  //   ],
  // },
  { path: 'passport/callback/:type', component: CallbackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassportRoutingModule {}
