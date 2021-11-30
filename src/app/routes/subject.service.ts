import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  // 创建Subject事件
  private subject = new Subject();
  constructor() {}
  // 创建消费者监听
  listen = this.subject.asObservable();
  //发送数据
  emit(value: any) {
    this.subject.next(value);
  }
}
