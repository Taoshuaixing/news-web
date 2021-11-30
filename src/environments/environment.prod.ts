import { DelonMockModule } from '@delon/mock';
import { Environment } from '@delon/theme';
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
