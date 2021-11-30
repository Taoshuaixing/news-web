import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from '@env/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CrudServiceService } from 'src/app/routes/crud-service.service';
import { ComponentService } from '../component.service';
@Component({
  selector: 'app-ke-shi-hua',
  templateUrl: './ke-shi-hua.component.html',
  styleUrls: [],
})
export class KeShiHuaComponent implements OnInit {
  @Input() sumCount: any;
  isSpinning: boolean = false;
  lastSpinning: boolean = false;
  pieChartData: any = [];
  LineChartData: any = { name: [], value: [] };
  barChartData: any = { name: [], value: [] };
  allData: any;
  mtData: any = [];
  isVisible = false;
  isVisibleMT = false;
  isDown = true;
  canvasImg: any = '';
  showPieChart = true;
  showLineChart = true;
  showRadarChart = true;
  @ViewChild('downLoadImg') downloadimg!: ElementRef;
  constructor(private componentService: ComponentService, private message: NzMessageService, private crudService: CrudServiceService) {}

  ngOnInit() {
    this.isSpinning = true;
    this.lastSpinning = true;
    this.crudService
      .search(environment.searchUrl, 'api/search/searchTopicBySolr', { groupType: 'channel_class', indexName: 'newsIndex' })
      .subscribe(
        (res: any) => {
          res.data.forEach((item: any) => {
            this.isSpinning = false;
            this.pieChartData.push({ value: item.num, name: item.title });
            this.barChartData.name.push(item.title);
            this.barChartData.value.push(item.num);
          });
        },
        (error) => {
          console.log(error);
          this.isSpinning = false;
        },
      );

    this.crudService
      .search(environment.searchUrl, 'api/search/searchTopicBySolr', { groupType: 'jobclass', indexName: 'newsIndex' })
      .subscribe(
        (res: any) => {
          res.data.forEach((item: any) => {
            this.lastSpinning = false;
            this.mtData.push({ name: item.title.replace(/\[/g, '').replace(/\]/g, ''), value: item.num });
            this.LineChartData.name.push(item.title.replace(/\[/g, '').replace(/\]/g, ''));
            this.LineChartData.value.push(item.num);
          });
        },
        (error) => {
          console.log(error);
          this.lastSpinning = false;
        },
      );
  }
  //保存png图片
  downloadImage(id: any, name: any) {
    this.componentService.saveImage(id, name);
  }

  quZheng(num: number) {
    return Math.round(num);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.isVisibleMT = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleMT = false;
  }

  rollback() {
    this.message.info('功能开发中，敬请期待！');
  }

  //导出pdf
  downLoadJspdf() {
    this.componentService.downloadJsPDF(document.getElementById('keshihua'), '可视化数据');
  }
}
