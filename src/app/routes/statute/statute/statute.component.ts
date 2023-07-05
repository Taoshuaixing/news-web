import { filter } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { CrudServiceService } from 'src/app/routes/crud-service.service';
import { ComponentService } from 'src/app/shared/component/component.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-statute',
  templateUrl: './statute.component.html',
  styleUrls: [],
})
export class StatuteComponent implements OnInit {
  endDate: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
  requestData: any = {
    dataType: 1,
    sortBy: 'publish_time',
    sortType: 'desc',
    pageSize: 10,
    pageNum: 1,
    startTime: new Date(),
    endTime: new Date(),
    jobName: '',
    keywords: [],
    jurisdiction: '',
    region: [],
    jobClass: [],
    channel_class: [],
    viewType: [],
  };

  region: any = '';
  onChangeDate: any = '';
  isSpinning = false;
  data: any = [];
  sumCount: any;
  abstractText = '显示摘要';
  browseText = '列表浏览';
  keShiHua: boolean = true;
  subJectTreeNodes: any = [];
  selectMsg: boolean = false;

  constructor(
    private datePipe: DatePipe,
    private ComponentService: ComponentService,
    private crudService: CrudServiceService,
    private NzMessageService: NzMessageService,
  ) {}

  selectNode(e: any) {
    this.requestData.channel_class.push(e['key']);
    console.log(e['key']);
    // this.searchFindAll();
  }

  ngOnInit(): void {
    this.requestData.startTime.setDate(this.requestData.startTime.getDate() - 3);
    // this.searchFindAll();
  }
  /* 新闻检索数据 */
  searchFindAll() {
    this.isSpinning = true;
    this.crudService.search(environment.searchUrl, 'api/search/searchNewsBySolr', this.requestData).subscribe(
      (result: any) => {
        this.isSpinning = false;
        // this.data = result.data;
        result.data.forEach((element) => {
          element.checked = false;
        });
        this.data = result.data;
        this.sumCount = result.total;
        this.subJectTreeNodes = [];
        result.topic.channelClass.forEach((element) => {
          this.subJectTreeNodes.push({
            title: element.title + `(${element.num})`,
            key: element.key,
          });
        });
        this.subJectTreeNodes = [...this.subJectTreeNodes];
      },
      (error) => {
        this.isSpinning = false;
        console.log(error);
      },
    );
  }
  getChannelClassData($event) {
    console.log($event);
    if ($event === 'delAll') {
      this.requestData.channel_class = [];
      this.searchFindAll();
    } else {
      this.requestData.channel_class = $event;
      this.searchFindAll();
    }
  }
  pageIndexChange($event: number) {
    this.requestData.pageNum = $event;
    this.searchFindAll();
  }

  pageSizeChange($event: number) {
    this.requestData.pageSize = $event;
    this.searchFindAll();
  }

  getChildKeyWords($event: any) {
    this.requestData.keywords = $event;
    this.searchFindAll();
  }

  getSelectedTime($event: any) {
    this.requestData.startTime = $event[0];
    this.requestData.endTime = $event[1];
    this.searchFindAll();
  }

  getSortType($event: boolean) {
    console.log($event);
    if ($event) {
      this.requestData.sortType = 'desc';
      this.searchFindAll();
    } else {
      this.requestData.sortType = 'asc';
      this.searchFindAll();
    }
  }

  getShowZhaiYao($event: any) {
    this.abstractText = $event;
  }
  getBrowserType($event: any) {
    this.browseText = $event;
    if ($event === '列表浏览') {
      this.keShiHua = false;
      this.requestData.viewType = [];
      this.searchFindAll();
    } else if ($event === '分组浏览') {
      this.keShiHua = false;
      this.requestData.viewType = ['严肃性', '娱乐性', '互动性'];
      this.searchFindAll();
    } else if ($event === '可视化') {
      this.keShiHua = true;
    }
  }
  getmeiTi($event: any) {
    this.requestData.jobClass.push($event);
    this.region = $event;
    this.browseText = '列表浏览';
    this.requestData.viewType = [];
    this.searchFindAll();
  }

  getDataType($event: any) {
    if ($event == '精准搜索') {
      this.requestData.dataType = 2;
      this.searchFindAll();
    } else {
      this.requestData.dataType = 1;
      this.searchFindAll();
    }
  }
  selectAll() {
    this.selectMsg = !this.selectMsg;
    this.data.forEach((element) => {
      if (this.selectMsg) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
  }

  cancel(): void {
    this.NzMessageService.info('click cancel');
  }

  confirm(): void {
    this.NzMessageService.info('click confirm');
  }

  //导出Excel
  exportExcel() {
    const filterData = this.data.filter((da) => da.checked);
    if (filterData.length == 0) {
      this.NzMessageService.info('请选择需要导出的数据！');
      return;
    } else this.ComponentService.downloadExcel(filterData, '新闻检索数据');
  }
  //导出pdf

  exportPDF() {
    this.ComponentService.downloadJsPDF(document.getElementById('news-data'), '新闻检索数据pdf');
  }

  //下载png
  downloadPNG() {
    this.ComponentService.saveImage('#news-data', '新闻检索数据PNG');
  }
}
