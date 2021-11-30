// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DelonMockModule } from '@delon/mock';
import { Environment } from '@delon/theme';
import * as MOCKDATA from '../../_mock';

export const environment = {
  production: false,
  useHash: true,
  productName: '河北大学新闻传播学院新闻舆论研判平台',
  // 测试环境
  searchUrl: 'http://192.168.0.140:5000/',
  publicUrl: 'http://192.168.0.239:9010/',
  loginUrl: '',
  api: {
    baseUrl: './',
    refreshTokenEnabled: false,
    refreshTokenType: 'auth-refresh',
  },
  modules: [DelonMockModule.forRoot({ data: MOCKDATA })],
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
