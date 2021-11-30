import { async } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: [],
})
export class LineChartComponent implements OnInit {
  @Input() lineChartData: any;
  option: any;
  constructor() {}

  ngOnInit() {
    this.option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.lineChartData.name,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.lineChartData.value,
          type: 'line',
          areaStyle: {},
        },
      ],
    };
  }
}
