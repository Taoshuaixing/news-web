import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
@Component({
  selector: 'app-subject-tree',
  templateUrl: './subject-tree.component.html',
  styleUrls: [],
})
export class SubjectTreeComponent implements OnInit, OnChanges {
  @Input() nodes: any;
  @Output() clickNode: EventEmitter<any> = new EventEmitter<any>();
  isSpinning = false;
  maxPx: number = 500;
  ifSeeMore: boolean = true;
  tenNodes = [];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    console.log('激活了');
    setTimeout(() => {
      this.tenNodes = this.nodes;
      this.nodes = this.tenNodes.slice(0, 15);
      // this.nodes = [...this.nodes]
    }, 300);
  }

  nzEvent(event: NzFormatEmitEvent): void {
    if (event.node?.isSelected) {
      this.clickNode.emit(event.node.origin);
      event.node.origin.selected = false;
    }
  }
  seeMore() {
    this.ifSeeMore = !this.ifSeeMore;
    this.setData();
  }

  setData() {
    if (this.ifSeeMore) {
      this.nodes = this.tenNodes.slice(0, 15);
      this.nodes = [...this.nodes];
    } else {
      this.nodes = this.tenNodes;
      this.nodes = [...this.nodes];
    }
  }
}
