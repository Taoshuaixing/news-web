import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { filter } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: [],
})
export class SettingComponent implements OnInit {
  loading = false;
  avatarUrl?: string;
  ifUserName: boolean = true;
  isVisible = false;
  userProfile = JSON.parse(this.cookieService.get('profile'));
  fileList: any = [];
  headers = null;
  imageLimit: number | undefined;
  masterUser: any;
  uploadLoading = false;

  constructor(
    private msg: NzMessageService,
    private cookieService: CookieService,
    private http: HttpClient,
    private notification: NzNotificationService,
    private subjectService: SubjectService,
  ) {}
  ngOnInit() {
    console.log(this.userProfile);
  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  glaction() {
    // const url = environment.serverUrl + 'api/accountUser/uploadUserIcon/'+this.masterUser['id'];
    return environment.searchUrl + 'api/test';
  }

  handleChange(info: { file: NzUploadFile }): void {
    console.log(info);
    if (info['type'] == 'start') {
      this.uploadLoading = true;
    }
  }

  uploadImage(): void {
    const formData = new FormData();
    this.uploadLoading = true;
    this.imageLimit = this.fileList.length;
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any, i: number) => {
      if (i === this.fileList.length - 1) {
        formData.append('file', file.originFileObj);
      }
    });
    // this.uploading = true;
    const req = new HttpRequest('POST', environment.searchUrl + 'api/p/t/users/upload-avatar/' + this.userProfile['id'], formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter((e) => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploadLoading = false;
          this.fileList = [];
          this.notification.success('头像修改成功', '');
          this.subjectService.emit('update');
        },
        () => {
          this.uploadLoading = false;
          this.notification.error('头像修改失败', '');
          this.subjectService.emit('error');
        },
      );
  }
}
