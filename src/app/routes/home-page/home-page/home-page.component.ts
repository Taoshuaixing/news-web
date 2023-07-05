import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
import 'src/assets/map/china.js';
import { CrudServiceService } from '../../crud-service.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent implements OnInit {
  ZFOptions: any;
  ZMOptions: any;
  MTOptions: any;
  isSpinning = false;
  data: any;
  colors = ['#5470C6', '#91CC75', '#EE6666'];
  ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
  requestData: any = {
    sortBy: 'publish_time',
    sortType: 'desc',
    pageSize: 50,
    pageNum: 1,
    startTime: '2014-01-01T05:00:00Z',
    endTime: new Date(),
    jobName: '',
    keywords: [],
    jurisdiction: '',
    region: [],
    jobClass: [],
    viewType: [],
  };

  publicRequest: any = {
    sortBy: 'publish_time',
    sortType: 'desc',
    pageSize: 10,
    pageNum: 1,
    startTime: '2014-01-01T05:00:00Z',
    endTime: new Date(),
    jobName: '',
    keywords: [],
    jurisdiction: '',
    region: [],
    jobClass: [],
    viewType: [],
    platform: [],
  };
  flag = false;
  timer: any;
  china: any;
  newSum: any = 257849;
  sumTimer: any;
  pageName: any;
  option = {
    title: {
      top: 10,
      // text: '3D数据分布图',
      left: 'center',
      textStyle: {
        color: '#000000',
      },
    },
    backgroundColor: 'rgba(0, 10, 52, 0)',
    geo: {
      map: 'china',
      aspectScale: 0.75,
      layoutCenter: ['50%', '51.5%'], //地图位置
      layoutSize: '118%',
      roam: true,
      itemStyle: {
        normal: {
          borderColor: 'rgba(147, 235, 248, 1)',
          borderWidth: 0.5,
          color: {
            type: 'linear-gradient',
            x: 0,
            y: 1500,
            x2: 2500,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#009DA1', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#005B9E', // 50% 处的颜色
              },
            ],
            global: true, // 缺省为 false
          },
          opacity: 0.5,
        },
        emphasis: {
          areaColor: '#2a333d',
        },
      },
      regions: [
        {
          name: '南海诸岛',
          itemStyle: {
            areaColor: 'rgba(0, 10, 52, 1)',
            borderColor: 'rgba(0, 10, 52, 1)',
          },
          emphasis: {
            areaColor: 'rgb(0,10,52)',
            borderColor: 'rgba(0, 10, 52, 1)',
          },
        },
      ],
      z: 2,
    },
    series: [
      {
        type: 'map',
        map: 'china',
        tooltip: {
          show: false,
        },
        label: {
          show: true,
          color: '#FFFFFF',
          fontSize: 14,
        },
        aspectScale: 0.75,
        layoutCenter: ['50%', '50%'], //地图位置
        layoutSize: '118%',
        roam: true,
        itemStyle: {
          normal: {
            borderColor: 'rgba(1,157,232, 0.6)',
            borderWidth: 0.8,
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 1200,
              x2: 1000,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#009DA1', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#005B9E', // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
          },
          emphasis: {
            areaColor: 'rgba(147, 235, 248, 0)',
          },
        },
        zlevel: 1,
      },
    ],
  };
  constructor(private datePipe: DatePipe, private el: ElementRef, private crudService: CrudServiceService) {}

  ngOnInit() {
    this.pageName = location.href.split('/#/')[1];
    this.timer = setInterval(() => {
      this.showMarquee();
    }, 2000);
    this.sumTimer = setInterval(() => {
      this.newSum++;
    }, 500);
    this.initChart();
    // this.searchFindAll();
    this.searchPublicSentimentData();
    this.initEcharts();
    console.log(this.random(1, 100));
  }
  initEcharts() {
    // 新建一个promise对象
    let newPromise = new Promise<void>((resolve) => {
      resolve();
    });
    //然后异步执行echarts的初始化函数
    newPromise.then(() => {
      //	此dom为echarts图标展示dom
      let dom: any = document.getElementById('main');
      let myChart = echarts.init(dom);
      myChart.on('georoam', function (params: any) {
        var option: any = myChart.getOption(); //获得option对象
        if (params.zoom != null && params.zoom != undefined) {
          //捕捉到缩放时
          option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
          option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
        } else {
          //捕捉到拖曳时
          option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
        }
        myChart.setOption(option); //设置option
      });
      myChart.setOption(this.option);
    });
  }
  showMarquee() {
    this.flag = true;
    setTimeout(() => {
      this.data.push(this.data);
      this.data.shift();
      this.flag = false;
    }, 500);
  }

  ngOnDestroy() {
    this.timer = null;
  }

  /* 新闻数据 */
  /*   searchFindAll() {
      this.isSpinning = true;
      this.crudService.search(environment.searchUrl, 'api/search/searchNewsBySolr', this.requestData).subscribe(
        (result: any) => {
          this.isSpinning = false;
          this.data = result.data;
          this.data.forEach((d: any) => {
            d.jobId = this.random(1, 101);
          });
          console.log(this.data);
        },
        (error) => {
          this.isSpinning = false;
          console.log(error);
        },
      );
    } */

  /* 舆情榜单数据 */
  searchPublicSentimentData() {
    this.isSpinning = true;
    this.crudService.search(environment.searchUrl, 'api/hbdx-top/searchTopBySolr', this.requestData).subscribe(
      (result: any) => {
        this.isSpinning = false;
        this.data = result.data;
        this.data.forEach((d: any) => {
          d.jobId = this.random(1, 101);
        });
        console.log(this.data);
      },
      (error) => {
        this.isSpinning = false;
        console.log(error);
      },
    );
  }

  initChart() {
    this.ZFOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          textStyle: {
            color: '#fff', //坐标值得具体的颜色
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#fff', //坐标值得具体的颜色
          },
        },
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          itemStyle: {
            normal: {
              //这里是重点
              color: function (params: any) {
                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                var colorList = ['#00DEFF', '#ffffff', '#00DEFF', '#ffffff', '#00DEFF', '#ffffff', '#00DEFF'];
                return colorList[params.dataIndex];
              },
            },
          },
        },
      ],
    };
    this.ZMOptions = {
      color: this.colors,

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      grid: {
        right: '20%',
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ['境内', '境外', '其他'],
        textStyle: { color: '#fff' },
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLabel: {
            textStyle: {
              color: '#fff', //坐标值得具体的颜色
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '境内',
          min: 0,
          max: 250,
          position: 'right',
          axisLine: {
            show: true,
            lineStyle: {
              color: this.colors[0],
            },
          },
          axisLabel: {
            formatter: '{value} ml',
          },
        },
        {
          type: 'value',
          name: '境外',
          min: 0,
          max: 250,
          position: 'right',
          offset: 80,
          axisLine: {
            show: true,
            lineStyle: {
              color: this.colors[1],
            },
          },
          axisLabel: {
            formatter: '{value} ml',
          },
        },
        {
          type: 'value',
          name: '数据源',
          min: 0,
          max: 25,
          position: 'left',
          axisLine: {
            show: true,
            lineStyle: {
              color: this.colors[2],
            },
          },
          axisLabel: {
            formatter: '{value} °C',
          },
        },
      ],
      series: [
        {
          name: '境内',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        },
        {
          name: '境外',
          type: 'bar',
          yAxisIndex: 1,
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        },
        {
          name: '数据源',
          type: 'line',
          yAxisIndex: 2,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        },
      ],
    };
    this.MTOptions = {
      title: {
        text: '数据分布',
        textStyle: { color: '#fff' },
      },
      // legend: {
      //   data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
      // },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '销售（Sales）', max: 6500 },
          { name: '管理（Administration）', max: 16000 },
          { name: '信息技术（Information Technology）', max: 30000 },
          { name: '客服（Customer Support）', max: 38000 },
          { name: '研发（Development）', max: 52000 },
          { name: '市场（Marketing）', max: 25000 },
        ],
      },
      series: [
        {
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: '预算分配（Allocated Budget）',
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: '实际开销（Actual Spending）',
            },
          ],
        },
      ],
    };
  }
  getTitleId(id: any) {
    console.log(id);
  }

  // 随机生成1-100
  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
