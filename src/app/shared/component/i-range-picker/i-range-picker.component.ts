import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import endOfMonth from 'date-fns/endOfMonth';

@Component({
  selector: 'i-range-picker',
  templateUrl: './i-range-picker.component.html',
  styles: [],
})
export class IRangePickerComponent implements OnInit {
  rangDate = [new Date(), new Date()];
  @Output() rangDateChange: EventEmitter<any> = new EventEmitter();
  @Input() selectDate = ['', ''];
  @Input() size = 'default';
  @Output() selectDateChange: EventEmitter<any> = new EventEmitter();
  today: any;
  @Input() rangeList = [
    { name: '一天', days: 0, active: false },
    { name: '三天', days: 2, active: false },
    { name: '一周', days: 6, active: true },
    { name: '一月', days: 29, active: false },
  ];
  ranges1 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };
  @Input() minusDay = 0;
  constructor(private datePipe: DatePipe) {}
  ngOnInit(): void {
    this.today = new Date();
    let range = null;
    for (let r of this.rangeList) {
      if (r.active) {
        // @ts-ignore
        range = r;
      }
    }
    if (!range) {
      // @ts-ignore
      range = { name: '一月', days: 29 + this.minusDay, active: true };
    }
    this.setRange(range);
  }
  onFromDataChange(e: any) {
    console.log(e);
    if (e.length == 0) {
      this.selectDateChange.emit(['', '']);
    } else {
      let lastTime = new Date(e[1]);
      lastTime.setDate(lastTime.getDate());
      const start_date = this.datePipe.transform(e[0], 'yyyy-MM-dd HH:mm:ss');
      const end_date = this.datePipe.transform(lastTime, 'yyyy-MM-dd HH:mm:ss');
      this.selectDateChange.emit([start_date, end_date]);
    }
  }

  setRange(range: any) {
    for (let r of this.rangeList) {
      r.active = false;
    }
    let startDay = new Date();
    range.active = true;
    startDay.setDate(startDay.getDate() - range.days - this.minusDay);
    let today = new Date();
    console.log(today);
    today.setDate(today.getDate());
    console.log(today);
    this.rangDate = [startDay, today];
    console.log(this.rangDate);
    this.rangDateChange.emit(this.rangDate);
    this.sendDate();
  }

  sendDate() {
    let lastTime = new Date(this.rangDate[1]);
    lastTime.setDate(lastTime.getDate());
    const start_date = this.datePipe.transform(this.rangDate[0], 'yyyy-MM-dd HH:mm:ss');
    const end_date = this.datePipe.transform(lastTime, 'yyyy-MM-dd HH:mm:ss');
    this.selectDateChange.emit([start_date, end_date]);
  }
}
