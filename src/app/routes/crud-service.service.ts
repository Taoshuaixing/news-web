import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudServiceService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  /*
   查询
   */

  searchAll(baseUrl: string, subUrl: string) {
    return this.http.get('' + baseUrl + '/' + subUrl);
  }

  /**
   * 检索加条件
   * @param baseUrl API
   * @param subUrl 子路径
   * @param params 参数
   */
  search(baseUrl: string, subUrl: string, params: any) {
    return this.http.post(baseUrl + subUrl, params);
  }

  /**
   * 下载pdf
   *
   * */
  downLoad(baseUrl: string, subUrl: string, id: any) {
    return this.http.get(baseUrl + subUrl + id, { responseType: 'arraybuffer' });
  }

  searchCrud(limit: number, page: number, s: string, subUrl: string) {
    const headers = new HttpHeaders().set('ticket', this.cookieService.get('ticket'));
    return this.http.get(environment.searchUrl + '' + `${subUrl}?s=${s}&limit=${limit}&page=${page}`, { headers: headers });
  }
}
