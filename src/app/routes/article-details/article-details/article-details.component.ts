import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { CrudServiceService } from '../../crud-service.service';
import { ComponentService } from '../../../shared/component/component.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: [],
})
export class ArticleDetailsComponent implements OnInit {
  requestParams: any = {
    id: null,
    keywords: [],
  };
  responseData: any = new Object();
  pageName: any;
  searchContent: any;
  wordsNum: number = 0;
  checked: boolean = false;
  disabled: boolean = true;
  isSpinning: boolean = false;
  skeleton: boolean = true;
  constructor(private componentService: ComponentService, private routeInfo: ActivatedRoute, private crudService: CrudServiceService) {}

  ngOnInit(): void {
    this.pageName = location.href.split('pageName=')[1];
    console.log(this.pageName);

    this.searchArticleDetails();
  }

  //查询文章详情数据
  searchArticleDetails() {
    this.requestParams.id = parseInt(this.routeInfo.snapshot.queryParams['id']);
    if (this.routeInfo.snapshot.queryParams['keywords'] instanceof Array) {
      this.requestParams.keywords = this.routeInfo.snapshot.queryParams['keywords'];
    } else if (this.routeInfo.snapshot.queryParams['keywords'] === undefined) {
      this.requestParams.keywords = this.routeInfo.snapshot.queryParams['keywords'];
    } else {
      this.requestParams.keywords.push(this.routeInfo.snapshot.queryParams['keywords']);
    }

    //判断是哪个页面传回来的数据
    if (this.pageName === 'statute' || this.pageName === 'overview') {
      console.log('我是新闻检索页面');
      this.isSpinning = true;
      this.crudService.search(environment.searchUrl, 'api/search/searchNewsDesc', this.requestParams).subscribe((result: any) => {
        console.log(result);
        this.responseData = result.data[0];
        this.isSpinning = false;
        this.skeleton = false;
      });
    } else if (this.pageName === 'publicSentiment') {
      console.log('我是舆情事件页面');
      this.isSpinning = true;
      this.crudService.search(environment.searchUrl, 'case/list/articleDetail', this.requestParams).subscribe((result: any) => {
        this.responseData = result.data;
        this.isSpinning = false;
        this.skeleton = false;
      });
    }
  }

  /* content高亮 */
  highLight(words: any) {
    this.wordsNum = 0;
    this.checked = true;
    this.responseData.content = this.responseData.content.replace(/<\/?.+?\/?>/g, '');
    let reg = new RegExp('(' + words + ')', 'g');
    this.responseData.content = this.responseData.content.replace(
      reg,
      "<em style='font-size:16px' class='animate__animated animate__flash'>$1</em>",
    );

    let index = this.responseData.content.indexOf(words); // 字符出现的位置
    while (index !== -1) {
      this.wordsNum++; // 每出现一次 次数加一
      index = this.responseData.content.indexOf(words, index + 1); // 从字符串出现的位置的下一位置开始继续查找
    }
  }
  jianTingKey(e: any) {
    if (e.keyCode === 13) {
      this.highLight(this.searchContent);
    } else if (e.keyCode === 27) {
      this.searchContent = null;
    }
  }

  checkBox(words: any) {
    if (this.checked && words !== '') {
      this.highLight(words);
    } else if (words === '' && !this.checked) {
      this.wordsNum = 0;
      this.disabled = true;
      this.responseData.content = this.responseData.content.replace(/<\/?.+?\/?>/g, '');
    } else {
      this.wordsNum = 0;
      this.responseData.content = this.responseData.content.replace(/<\/?.+?\/?>/g, '');
    }
  }

  ngModelChange($event: any) {
    if ($event === '' && this.wordsNum === 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }
  //下载pdf
  downLoadJspdf() {
    this.componentService.downloadJsPDF(document.getElementById('article'), '文章详情');
  }
}
