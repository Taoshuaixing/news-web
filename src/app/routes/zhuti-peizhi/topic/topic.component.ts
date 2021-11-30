import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { environment } from '@env/environment';
import { CrudService } from 'kkk-lib';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CookieService } from 'ngx-cookie-service';
import { CrudServiceService } from '../../crud-service.service';

@Component({
  selector: 'k-topic',
  templateUrl: './topic.component.html',
  styleUrls: [],
})
export class TopicComponent implements OnInit {
  @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent!: any;
  @Output() selectedTopic: EventEmitter<any> = new EventEmitter<any>();

  isVisible = false;
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
      this.groupId = this.userProfile['groups'][0]['id'];
      console.log(this.groupId);
      this.initData();
    }
    // const a = {"$and":[{"groupId":1},{"parent":{"$isnull":true}}]}
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

  handleOk(): void {
    //this.isVisible = false;
    this.updateBody.groupId = this.groupId;
    if (!this.updateBody.updateFlg && this.updateBody.name) {
      this.crud.create(this.updateBody, 'api/topic-crud', environment.searchUrl).subscribe((res) => {
        this.initData();
        this.isVisible = false;
      });
    }

    if (this.updateBody.updateFlg) {
      this.crud.update(this.updateBody.id, { name: this.updateBody.name }, 'api/topic-crud', environment.searchUrl).subscribe((res) => {
        this.initData();
        this.isVisible = false;
      });
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  onSelectTopic(event: any) {
    //console.log(event);
    console.log(event['node']['origin']);
    this.selectedTopic.emit({ id: event['node']['origin']['key'], name: event['node']['origin']['title'] });
  }

  createModal(node: any): void {
    if (node['key']) {
      this.updateBody.parent = { id: node['key'] };
    } else {
      this.updateBody.parent = null;
    }
    this.updateBody.id = 0;
    this.updateBody.name = '';
    this.updateBody.updateFlg = false;
    this.isVisible = true;
  }

  updateModal(node: any): void {
    this.updateBody.id = node['key'];
    this.updateBody.name = node['title'];
    this.updateBody.updateFlg = true;
    this.isVisible = true;
  }

  confirm(node: any): void {
    this.crud.delete(node['key'], 'api/topic-crud', environment.searchUrl).subscribe(
      (res) => {
        this.initData();
        this.isVisible = false;
      },
      (error) => {
        this.notification.warning('有关联的主题或者规则，无法删除', '');
      },
    );
  }

  cancel(): void {}
}
