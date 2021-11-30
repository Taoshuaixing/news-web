import { DatePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, EventEmitter, OnInit, Output, Input } from '@angular/core';
import endOfMonth from 'date-fns/endOfMonth';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchCriteriaComponent implements OnInit {
  @Output() keyWordsArray: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedTimeArray: EventEmitter<any> = new EventEmitter<any>();
  @Output() sortTypeString: EventEmitter<any> = new EventEmitter<any>();
  @Output() channelClassData: EventEmitter<any> = new EventEmitter<any>();
  @Output() showZhaiYao: EventEmitter<any> = new EventEmitter<any>();
  @Output() browserType: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitDataType: EventEmitter<any> = new EventEmitter<any>();
  @Input() channel_class: any = [];
  @Input() sumCount: any = [];

  listOfOption: Array<{ label: string; value: string }> = [];
  tagValue: any = '';
  keywords: any = [];
  radioValue = '三天';
  ranges1 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };
  flag = true;
  sortType: boolean = true;
  end_date: any = new Date();
  tipTitlt: any = '降序';
  abstractText = '显示摘要';
  browseText = '列表浏览';
  biaoTiRadio: any = '标题';
  piPeiRadio: any = '模糊搜索';
  constructor(private message: NzMessageService, private datePipe: DatePipe) {}

  ngOnInit(): void {}

  /* 输入框逻辑 */
  searchKeyWords() {
    if (this.tagValue !== '' && this.tagValue.indexOf(' ') === -1) {
      this.keywords.push(this.tagValue);
      this.keywords = Array.from(new Set(this.keywords));
      this.keyWordsArray.emit(this.keywords);
      this.tagValue = '';
    } else if (this.tagValue !== '' && this.tagValue.indexOf(' ') !== -1 && this.tagValue.match(/^[ ]+$/) === null) {
      this.arrayToString(this.tagValue);
      this.keyWordsArray.emit(this.keywords);
      this.tagValue = '';
    } else if (this.tagValue.match(/^[ ]+$/)) {
      this.message.info('请输入有效字符');
    }
  }

  arrayToString(name: any) {
    let arr = name.trim().split(/\s+/);
    arr.forEach((element) => {
      this.keywords.push(element);
    });
    this.keywords = Array.from(new Set(this.keywords));
  }

  /* 关闭关键词标签 */
  handleClose(removedTag: {}): void {
    this.keywords = this.keywords.filter((tag: any) => tag !== removedTag);
    this.keyWordsArray.emit(this.keywords);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  /* 关闭媒体标签 */
  channel_classClose(removedTag: {}): void {
    this.channel_class = this.channel_class.filter((tag: any) => tag !== removedTag);
    this.channelClassData.emit(this.channel_class);
  }

  /* 一键删除tags */
  delSearch(del: any) {
    if (del === 'g') {
      this.keywords = [];
      this.keyWordsArray.emit(this.keywords);
    } else if (del === 'clerarChannel_class') {
      this.channel_class = [];
      this.channelClassData.emit(this.channel_class);
    }
  }

  /* 时间筛选逻辑 */
  judgeDate(judge: any) {
    switch (judge) {
      case '三天':
        this.selectedTimeArray.emit([this.setDay(3), this.end_date]);
        break;
      case '一周':
        this.selectedTimeArray.emit([this.setDay(7), this.end_date]);
        break;
      case '一个月':
        this.selectedTimeArray.emit([this.setMonth(1), this.end_date]);
        break;
      case '三个月':
        this.selectedTimeArray.emit([this.setMonth(3), this.end_date]);
        break;
      case '半年':
        this.selectedTimeArray.emit([this.setMonth(6), this.end_date]);
        break;
      case '自定义':
        this.flag = false;
        break;
    }
  }
  setMonth(monthNum) {
    let startMonth = new Date();
    startMonth.setMonth(startMonth.getMonth() - monthNum);
    return startMonth;
  }
  setDay(dayNum) {
    let startDate = new Date();
    startDate.setDate(startDate.getDate() - dayNum);
    return startDate;
  }

  /* 获取时间筛选框的值 */
  onChange(result: Date[]): void {
    const start_date = result[0];
    const end_date = result[1];
    this.selectedTimeArray.emit([start_date, end_date]);
  }

  /* 返回按钮 */
  rollBackChange() {
    this.flag = true;
    this.radioValue = '三天';
    this.judgeDate('三天');
  }

  /* 排序类型 */
  emitSortType() {
    this.sortType = !this.sortType;
    this.sortTypeString.emit(this.sortType);
  }

  /* 监听回车键 */
  jianTingKey(e: any) {
    if (e.keyCode === 13) {
      this.searchKeyWords();
      this.tagValue = '';
    } else if (e.keyCode === 27) {
      this.tagValue = '';
    }
  }

  /* 是否显示摘要 */
  showAbstract(n: any) {
    this.abstractText = n;
    this.showZhaiYao.emit(n);
  }

  /* 列表模式可视化模式切换 */
  tableBrowse(t: any) {
    if (t !== '可视化') {
      this.browseText = t;
      this.browserType.emit(t);
    } else {
      this.browserType.emit(t);
    }
  }

  /* 精准模糊搜索 */
  setDataType($event: any) {
    this.emitDataType.emit($event);
  }
}
