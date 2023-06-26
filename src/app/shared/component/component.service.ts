import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { CrudServiceService } from 'src/app/routes/crud-service.service';
import { environment } from '@env/environment';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  constructor(private crudService: CrudServiceService) {}

  /* 
  请求搜索树的数据
  */
  getTreeDataPost(type: string) {
    const treeData = this.crudService
      .search(environment.searchUrl, 'api/search/searchTopicBySolr', { groupType: type, indexName: 'newsIndex' })
      .subscribe((res: any) => {
        return res.data;
      });
    return treeData;
  }

  //前端下载png
  async saveImage(id: any, name: any) {
    html2canvas(document.querySelector(id)).then((canvas) => {
      // document.body.appendChild(canvas)
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.setAttribute('download', name + '.png');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
    });
  }

  // 前端pdf导出
  downloadJsPDF(element: any, name: any) {
    html2canvas(element, {
      logging: false, //一开始canvas设置不渲染页面
    }).then((canvas) => {
      let pdf: any = new jsPDF('p', 'mm', 'a4'); //纵向，单位mm，A4纸张大小
      let ctx: any = canvas.getContext('2d'); //预设2维画布
      let a4w: number = 190; //设置显示内容的大小，A4大小：210*297；最后显示在A4内部区域大小为：190*360
      let a4h: number = 260;
      let imgHeight: number = Math.floor((a4h * canvas.width) / a4w); //按A4显示比例换算一页图像的像素高度
      let renderedHeight: number = 0;

      while (renderedHeight < canvas.height) {
        //判断页面有内容时
        let page: any = document.createElement('canvas'); //创建画布
        page.width = canvas.width; //设置画布宽高等于内容宽高
        page.height = Math.min(imgHeight, canvas.height - renderedHeight); //画布的高等于内容的最小的高度（不足一页）
        //用getImageData裁剪指定区域，并绘制到前面创建的canvas对象中
        let a: any = page.getContext('2d');
        a.putImageData(ctx.getImageData(0, renderedHeight, canvas.width, Math.min(imgHeight, canvas.height - renderedHeight)), 0, 0);
        pdf.addImage(page.toDataURL('image/jpeg', 1.0), 'JPEG', 10, 10, a4w, Math.min(a4h, (a4w * page.height) / page.width)); //添加图片到页面，保留10mm边距

        renderedHeight += imgHeight;
        if (renderedHeight < canvas.height) {
          pdf.addPage();
        }
      }
      pdf.save(name + '.pdf');
    });
  }

  // 前端excel导出
  downloadExcel(allData: any, fileName: string) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(allData);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
    });
    FileSaver.saveAs(data, fileName + '.xlsx');
  }
}
