/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-26 15:24:55
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-05 12:35:21
 */
import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { preloaderFinished } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

preloaderFinished();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated,
    preserveWhitespaces: false,
  })
  .then((res) => {
    const win = window as NzSafeAny;
    if (win && win.appBootstrap) {
      win.appBootstrap();
    }
    return res;
  })
  .catch((err) => console.error(err));
