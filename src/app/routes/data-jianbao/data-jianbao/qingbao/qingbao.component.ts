import { environment } from '@env/environment';
import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/routes/crud-service.service';
import { ComponentService } from 'src/app/shared/component/component.service';

@Component({
  selector: 'app-qingbao',
  templateUrl: './qingbao.component.html',
  styleUrls: ['./qingbao.component.less'],
})
export class QingbaoComponent implements OnInit {
  requestData: any = {
    groupType: 'channel_class',
    indexName: 'newsIndex',
  };
  zxOption: any;
  listOfAllData: any = [];
  lineCharts: any = [];
  public element: any;
  constructor(private crudService: CrudServiceService, private componentService: ComponentService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.listOfAllData = [];
    this.crudService.search(environment.searchUrl, 'api/search/searchTopicBySolr', this.requestData).subscribe((res: any) => {
      res.data.forEach((data: any) => {
        this.lineCharts.push([data.title, data.num]);
      });
      this.listOfAllData = res.data;
      this.initOptions();
    });
  }

  initOptions() {
    this.zxOption = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '30%'],
      },
      visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [
          {
            gt: 1,
            lt: 3,
            color: 'rgba(0, 0, 180, 0.4)',
          },
          {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 0, 180, 0.4)',
          },
        ],
      },
      series: [
        {
          type: 'line',
          smooth: 0.6,
          symbol: 'none',
          lineStyle: {
            color: '#5470C6',
            width: 5,
          },
          markLine: {
            symbol: ['none', 'none'],
            label: { show: false },
            data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
          },
          areaStyle: {},
          data: this.lineCharts,
        },
      ],
    };
  }

  //前端pdf下载
  downLoadJspdf() {
    this.componentService.downloadJsPDF(document.getElementsByTagName('nz-content')[0], '数据简报');
  }
}
