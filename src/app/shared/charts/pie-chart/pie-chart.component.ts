import { async } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: [],
})
export class PieChartComponent implements OnInit {
  @Input() pieData: any;
  pieOptions: any;
  constructor() {}

  ngOnInit() {
    this.pieOptions = {
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: '数据来源',
          type: 'pie',
          radius: ['38%', '62%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: this.pieData,
        },
      ],
    };
  }
}
