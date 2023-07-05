/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-03-15 18:23:34
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-05 16:45:30
 */
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CrudService } from 'kkk-lib';
import { CookieService } from 'ngx-cookie-service';
import { CrudServiceService } from '../../crud-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: [],
})
export class UserCollectionComponent implements OnInit {
  @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent!: any;
  @Output() selectedTopic: EventEmitter<any> = new EventEmitter<any>();

  twoTitle: any = '';
  modalTitle: any = '主题检索';
  userProfile = JSON.parse(this.cookieService.get('profile'));
  groupId = 0;
  nodes: any = null;
  updateBody: any = {
    name: '',
    id: 0,
    groupId: 0,
    parent: null,
    updateFlg: false,
  };
  constructor(
    private cookieService: CookieService,
    private crud: CrudService,
    private notification: NzNotificationService,
    private crudService: CrudServiceService,
  ) {}

  ngOnInit() {
    this.userProfile = JSON.parse(this.cookieService.get('profile'));
    if (this.userProfile['groups']) {
      // this.groupId = this.userProfile['groups'][0]['id'];
      console.log(this.groupId);
      // this.initData();
    }
  }
  initData() {
    this.crudService
      .searchCrud(1000, 1, `{"$and":[{"groupId":${this.groupId}},{"parent.id":{"$isnull":true}}]}`, 'api/topic-crud')
      .subscribe((res) => {
        const data = res['data'];
        console.log(data);
        const nodes: any = [];
        let firstFlg = true;
        for (let d of data) {
          const node = {
            title: d['name'],
            key: d['id'],
            expanded: true,
            children: null,
            parent: null,
          };

          if (firstFlg) {
            this.selectedTopic.emit({ id: d['id'], name: d['name'] });
            firstFlg = false;
          }

          if (d['children']) {
            const children: any = [];
            for (let c of d['children']) {
              children.push({
                title: c['name'],
                key: c['id'],
                expanded: true,
                children: null,
                parent: { id: d['id'] },
              });
            }
            node.children = children;
          }
          nodes.push(node);
        }
        console.log(nodes);
        this.nodes = nodes;
      });
  }

  onSelectTopic(event: any) {
    //console.log(event);
    console.log(event['node']['origin']);
    this.selectedTopic.emit({ id: event['node']['origin']['key'], name: event['node']['origin']['title'] });
  }

  deleteLike() {
    alert('功能开发中');
  }
}
