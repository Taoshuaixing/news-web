import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { config } from '../../../../environments/config';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: [],
})
export class DataTableComponent implements OnInit {
  @Input() data: any;
  @Input() pageIndex: any;
  @Input() pageSize: any;
  @Input() keywords: any;
  @Input() pageName: any;
  @Input() sumCount: any;
  @Input() abstractText: any;
  @Input() browseText: any;
  @Output() meiTi: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('downLoadImg') downloadimg!: ElementRef;
  constructor() {}

  ngOnInit() {}

  gengDuo(viewName: any) {
    this.meiTi.emit(viewName);
  }
  randomColor(domain) {
    return config.domainColor[domain];
  }
}
