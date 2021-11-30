import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas-tongji',
  templateUrl: './datas-tongji.component.html',
  styleUrls: ['./datas-tongji.component.less'],
})
export class DatasTongjiComponent implements OnInit {
  datasOptions: any;
  constructor() {}

  ngOnInit() {
    this.datasOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
        },
      ],
    };
  }
}
