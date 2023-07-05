/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-26 15:24:55
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-05 12:33:13
 */
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';

export const environment = {
  production: true,
  useHash: true,
  // 正式环境
  searchUrl: 'http://192.168.0.140:5000/',
  publicUrl: 'http://192.168.0.239:9010/',
  loginUrl: '',
  api: {
    baseUrl: './',
    refreshTokenEnabled: true,
    refreshTokenType: 'auth-refresh',
  },
  modules: [DelonMockModule.forRoot({ data: MOCKDATA })],
};
