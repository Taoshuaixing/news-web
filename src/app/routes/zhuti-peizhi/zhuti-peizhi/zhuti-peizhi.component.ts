import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {CookieService} from 'ngx-cookie-service';
import {CrudServiceService} from '../../crud-service.service';

@Component({
  selector: 'app-zhuti-peizhi',
  templateUrl: './zhuti-peizhi.component.html',
  styleUrls: [],
})
export class ZhutiPeizhiComponent implements OnInit {
  selectedTopic:any = null;
  selectTopic = null;
  keyWordArray: any = [{ keyWord1: '', keyWord2: '', keyWord3: '', notWord: '' }];
  userProfile = JSON.parse(this.cookieService.get('profile'));
  constructor(private msg: NzMessageService,
              private cookieService: CookieService,
              private crudService:CrudServiceService,) {}

  ngOnInit() {
    this.userProfile = JSON.parse(this.cookieService.get('profile'));
    console.log(this.userProfile);
  }

  onSelected(topic: any) {
    this.selectedTopic = topic
  }

  //添加规则组
  addRule() {
    this.keyWordArray.push({ keyWord1: '', keyWord2: '', keyWord3: '', notWord: '' });
  }

  //清空规则集
  clearAllRule() {}
}
