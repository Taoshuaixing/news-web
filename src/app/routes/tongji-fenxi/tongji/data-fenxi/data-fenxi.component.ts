import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { CrudServiceService } from 'src/app/routes/crud-service.service';

@Component({
  selector: 'app-data-fenxi',
  templateUrl: './data-fenxi.component.html',
  styleUrls: ['./data-fenxi.component.less'],
})
export class DataFenxiComponent implements OnInit {
  requestData: any = {
    groupType: 'jobclass',
    region: [],
  };
  zxOption: any;
  listOfAllData: any = [];
  lineCharts: any = [];
  constructor(private crudService: CrudServiceService) {}

  async ngOnInit() {
    // await this.getData();
  }
  async getData() {
    this.listOfAllData = [];
    this.crudService.search(environment.searchUrl, 'api/search/searchTopicBySolr', this.requestData).subscribe(async (res: any) => {
      res.data.datades.forEach((data: any) => {
        this.lineCharts.push({ name: data.datas.countName.f_city, value: data.datas.countName.f_num });
      });
      this.listOfAllData = res.data.datades;
      console.log(this.listOfAllData);
      console.log(this.lineCharts);
      await this.initOptions();
    });
  }

  async initOptions() {
    this.zxOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
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
          data: this.lineCharts,
        },
      ],
    };
  }
}
