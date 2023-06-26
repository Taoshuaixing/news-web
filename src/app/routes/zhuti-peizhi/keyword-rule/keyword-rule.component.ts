import {Component, Input, OnInit} from '@angular/core';
import {environment} from '@env/environment';
import {CrudService} from 'kkk-lib';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {CookieService} from 'ngx-cookie-service';
import {CrudServiceService} from '../../crud-service.service';
import {KeywordRuleService} from '../keyword-rule.service';

@Component({
  selector: 'k-keyword-rule',
  templateUrl: './keyword-rule.component.html',
  styleUrls: ['./keyword-rule.component.less']
})
export class KeywordRuleComponent implements OnInit {

  @Input() topic:any = null;
  zhuTiWord: any = '主题检索';
  keyWordArray: any = [{ keyWord1: '', keyWord2: '', keyWord3: '', notWord: '' }];
  userProfile = JSON.parse(this.cookieService.get('profile'));
  newKeywordRule = { keyword1: '',keyword2: '',keyword3: '',notWord:'',showLevel:1 };
  rules:any = [];
  constructor(private msg: NzMessageService,
              private cookieService: CookieService,
              private crudService:CrudServiceService,
              private crud: CrudService,
              private notification: NzNotificationService,
              private keywordRuleService:KeywordRuleService,) {}

  ngOnInit() {
    this.userProfile = JSON.parse(this.cookieService.get('profile'));
    console.log(this.userProfile);
    if(this.topic){
      this.initData();
    }
  }

  initData(){
    this.crudService.searchCrud(1000,1,
      `{"topic.id":${this.topic.id}}`,'api/keyword-rule-crud')
      .subscribe(res=>{
        const data = res['data'];
        console.log(data);
        this.rules = [];
        for(let d of data){
          const keyword = JSON.parse(d['keyword']);
          console.log(keyword);
          const rule = {
            id:d['id'],
            keyword1:keyword.keyword1.join(','),
            keyword2:keyword.keyword2.join(','),
            keyword3:keyword.keyword3.join(','),
            notWord:keyword.notWord.join(','),
            showLevel:keyword.showLevel,
          }
          this.rules.push(rule);
        }
      });
  }

  addKeywordRule(rule) {
    if(rule['showLevel']<3){
      rule['showLevel'] = rule['showLevel'] + 1
    }
  }


  //保存规则集
  saveRule(rule:any) {
    const kRule = {
      id:rule['id'],
      keyword1: this.keywordRuleService.strToArr(rule.keyword1),
      keyword2: this.keywordRuleService.strToArr(rule.keyword2),
      keyword3: this.keywordRuleService.strToArr(rule.keyword3),
      notWord: this.keywordRuleService.strToArr(rule.notWord),
      showLevel: rule.showLevel,
    }

    if(rule['id']){
      this.crud.update(rule['id'],{keyword:JSON.stringify(kRule)},
        'api/keyword-rule-crud',environment.searchUrl).subscribe(res=>{
        this.notification.success('创建成功','');
        this.initData();
      });
    }else{
      this.crud.create({keyword:JSON.stringify(kRule),
        sysCode:'河北大学',
        topic:{id:this.topic.id}
      },'api/keyword-rule-crud',environment.searchUrl).subscribe(res=>{
        this.notification.success('创建成功','');
        this.newKeywordRule = { keyword1: '',keyword2: '',keyword3: '',notWord:'',showLevel:1 };
        this.initData();
      });
    }


  }
  //清空规则集
  clearAllRule() {}

}
