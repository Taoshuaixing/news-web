/**
 * 通用服务类
 *
 * */
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getUserInfo() {
    let userInfo = {};
    const userInfoStr = this.cookieService.get('userInfo');
    if (userInfoStr) {
      userInfo = JSON.parse(userInfoStr);
    }
    return userInfo;
  }

  /**
   * 用户登录 通过用户名，密码登录
   *
   * */
  login(paramsBody: any): any {
    // return this.http.post(`${config.loginUrl}/auth/login`, paramsBody,{headers:{'Content-Type': 'application/x-www-form-urlencoded'}});
    return this.http.post(`${environment.loginUrl}api/auth/login`, paramsBody);
  }

  /**
   * 用户退出
   *
   * */
  logout() {
    this.cookieService.delete('ticket');
  }
}
