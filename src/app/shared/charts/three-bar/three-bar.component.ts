import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import 'echarts-gl';
import data from '../../../../assets/map/life-expectancy-table.json';
@Component({
  selector: 'app-three-bar',
  templateUrl: './three-bar.component.html',
  styleUrls: [],
})
export class ThreeBarComponent implements OnInit {
  threeOption: any;
  constructor() {}

  ngOnInit() {
    // var dom: any = document.getElementById('threeBar');
    // var myChart = echarts.init(dom);
    this.threeOption = {
      title: {
        text: '3D分布图',
        // link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('ECharts'),
        x: 'center',
        textStyle: {
          fontSize: 23,
        },
      },
      grid3D: {},
      tooltip: {},
      xAxis3D: {
        type: 'category',
      },
      yAxis3D: {
        type: 'category',
      },
      zAxis3D: {},
      visualMap: {
        max: 1e8,
        dimension: 'Population',
      },
      dataset: {
        dimensions: ['Income', 'Life Expectancy', 'Population', 'Country', { name: 'Year', type: 'ordinal' }],
        source: data,
      },
      series: [
        {
          type: 'bar3D',
          // symbolSize: symbolSize,
          shading: 'lambert',
          encode: {
            x: 'Year',
            y: 'Country',
            z: 'Life Expectancy',
            tooltip: [0, 1, 2, 3, 4],
          },
        },
      ],
    };
  }
}
