import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { CrudServiceService } from '../../crud-service.service';
@Component({
  selector: 'app-public-sentiment',
  templateUrl: './public-sentiment.component.html',
  styleUrls: [],
})
export class PublicSentimentComponent implements OnInit {
  requestData: any = {
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
    viewType: [],
    platform: [],
  };
  subJectTreeNodes: any = [];
  isSpinning = false;
  data: any = [];
  count: any;
  abstractText = '显示摘要';
  browseText = '列表浏览';
  region: any = '';
  constructor(private crudService: CrudServiceService) {}

  ngOnInit(): void {
    this.requestData.startTime.setDate(this.requestData.startTime.getDate() - 3);
    this.searchPublicSentimentData();
  }

  selectNode(e: any) {
    this.requestData.platform.push(e.key);
    this.searchPublicSentimentData();
  }

  /* 查询舆情榜单数据 */
  searchPublicSentimentData() {
    this.isSpinning = true;
    this.crudService.search(environment.searchUrl, 'api/hbdx-top/searchTopBySolr', this.requestData).subscribe(
      (result: any) => {
        this.isSpinning = false;
        this.data = result.data;
        this.count = result.total;
        this.subJectTreeNodes = [];
        result.topic.domain.forEach((element) => {
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
    this.requestData.platform = $event;
    this.searchPublicSentimentData();
  }
  pageIndexChange($event: number) {
    this.requestData.pageNum = $event;
    this.searchPublicSentimentData();
  }

  pageSizeChange($event: number) {
    this.requestData.pageSize = $event;
    this.searchPublicSentimentData();
  }

  /* 获取子组件的keyWords */
  getChildKeyWords($event: any) {
    console.log($event);
    this.requestData.keywords = $event;
    this.searchPublicSentimentData();
  }
  /* 获取子组件的时间值 */
  getSelectedTime($event: any) {
    this.requestData.startTime = $event[0];
    this.requestData.endTime = $event[1];
    this.searchPublicSentimentData();
  }
  /* 获取子组件的排序方式 */
  getSortType($event: any) {
    if ($event) {
      this.requestData.sortType = 'desc';
      this.searchPublicSentimentData();
    } else {
      this.requestData.sortType = 'asc';
      this.searchPublicSentimentData();
    }
  }
  /* 获取子组件的摘要 */
  getShowZhaiYao($event: any) {
    this.abstractText = $event;
  }

  /* 获取子组件tags数据 */
  getJobClassData($event) {
    console.log($event);
    this.requestData.platform = $event;
    this.searchPublicSentimentData();
  }
}
