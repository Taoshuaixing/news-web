import { Component, EventEmitter, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/tree';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: [],
})
export class ThemeComponent implements OnInit {
  @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent!: any;
  @Output() emitZhuTi: EventEmitter<any> = new EventEmitter<any>();

  items: any = [
    { name: '资源监测', nzSelected: true },
    { name: '事件检测', nzSelected: false },
    { name: '新闻检测', nzSelected: false },
    { name: '热点检测', nzSelected: false },
    { name: '账号监测', nzSelected: false },
  ];
  isVisible = false;
  twoTitle: any = '';
  modalTitle: any = '主题检索';
  activatedNode?: NzTreeNode;
  nodes = [
    {
      title: '主题检索',
      key: '100',
      expanded: true,
      children: [
        { title: '资源监测', key: '1000', expanded: true, children: [] },
        { title: '事件检测', key: '1001', expanded: true, children: [] },
        { title: '新闻检测', key: '1002', expanded: true, children: [] },
        { title: '热点检测', key: '1003', expanded: true, children: [] },
        { title: '账号监测', key: '1004', expanded: true, children: [] },
      ],
    },
  ];
  constructor(private message: NzMessageService) {}

  ngOnInit() {}

  showModal(name: any): void {
    this.twoTitle = '';
    this.isVisible = true;
    this.modalTitle = name;
  }

  handleOk(): void {
    this.isVisible = false;
    if (this.twoTitle !== '' && this.modalTitle === '主题检索') {
      this.nodes[0].children.push({ title: this.twoTitle, key: '1007', expanded: true, children: [] });
      console.log(this.nodes);
      this.nodes = [...this.nodes];
    } else if (this.twoTitle !== '' && this.modalTitle !== '主题检索') {
      this.nodes[0].children.forEach((c: any) => {
        if (c.title === this.modalTitle) {
          c.children.push({ title: this.twoTitle, key: c.key + 10, isLeaf: true });
          c.isLeaf = false;
          c.expanded = true;
        }
      });
      this.nodes = [...this.nodes];
    } else {
      this.message.info('不能输入空白主题！');
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  nzEvent(event: any) {
    this.emitZhuTi.emit(event.node.title);
  }
}
