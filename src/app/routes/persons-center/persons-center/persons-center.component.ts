import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { AuthService } from 'kkk-lib';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-persons-center',
  templateUrl: './persons-center.component.html',
  styleUrls: [],
})
export class PersonsCenterComponent implements OnInit, OnDestroy {
  menuObj: any = {
    setting: '/persons-center/setting',
    quanXian: '/persons-center/authority',
    dataBase: '/persons-center/database',
    collection: '/persons-center/collection',
  };
  userProfile = JSON.parse(this.cookieService.get('profile'));

  unSearch: Subscription;
  constructor(private subjectService: SubjectService, private cookieService: CookieService, private authService: AuthService) {
    this.unSearch = this.subjectService.listen.subscribe((res) => {
      console.log(res);
      this.getAuthInfo();
    });
  }

  ngOnInit() {}

  getAuthInfo() {
    this.authService.profile('api/auth/profile', environment.searchUrl).subscribe((res1) => {
      this.cookieService.set('profile', JSON.stringify(res1));
      this.userProfile = JSON.parse(this.cookieService.get('profile'));
      //this.router.navigate(['/']);
    });
  }

  //销毁服务
  ngOnDestroy() {
    this.unSearch.unsubscribe();
  }
}
