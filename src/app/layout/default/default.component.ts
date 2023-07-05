/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-03-15 18:23:34
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-05 15:47:05
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { AuthService } from 'kkk-lib';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { SubjectService } from 'src/app/routes/subject.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: [],
})
export class DefaultComponent implements OnInit, OnDestroy {
  menuDate: any;
  i: number = 1;
  searchKey: string | undefined;
  unSearch: Subscription;
  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthService,
  ) {
    this.unSearch = this.subjectService.listen.subscribe((res) => {
      console.log(res);
      this.getAuthInfo();
    });
  }
  menuList = [
    { title: '概览', url: '/overview' },
    { title: '新闻检索', url: '/statute' },
    { title: '舆情事件', url: '/publicSentiment' },
    { title: '数据简报', url: '/jianbao' },
    { title: '统计分析', url: '/tongji' },
    { title: '主题配置', url: '/zhuti' },
    { title: '系统权限配置', url: '/users' },
    { title: '个人中心', url: '/persons-center' },
  ];
  menuFlag: boolean = false;

  userProfile = JSON.parse(this.cookieService.get('profile'));
  ngOnInit() {
    this.userProfile = JSON.parse(this.cookieService.get('profile'));
    console.log(this.userProfile);
    this.menuDate = new Date();
    if (location.href.split('#/')[1] === 'overview') {
      this.menuFlag = true;
    } else {
      this.menuFlag = false;
    }
  }
  getMenuUrl(url: string) {
    console.log(url);
    if (url === '/overview') {
      this.menuFlag = true;
    } else {
      this.menuFlag = false;
    }
  }
  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/passport/login']);
  }

  getAuthInfo() {
    this.authService.profile('api/auth/profile', environment.searchUrl).subscribe((res1) => {
      this.cookieService.set('profile', JSON.stringify(res1));
      this.userProfile = JSON.parse(this.cookieService.get('profile'));
      this.router.navigate(['/']);
    });
  }

  //销毁服务
  ngOnDestroy() {
    this.unSearch.unsubscribe();
  }

  onChange(status: boolean): void {
    console.log(status);
  }
}
