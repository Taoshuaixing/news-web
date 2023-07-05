import { DelonMockModule } from '@delon/mock';
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
