import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-depart-manager',
  templateUrl: './depart-manager.component.html',
  styles: [],
})
export class DepartManagerComponent implements OnInit {
  configUser = {
    name: '用户',
    columns: [
      {
        title: '用户名',
        name: 'username',
        type: 'string',
        notSpace: false,
      },
      {
        title: '真实姓名',
        name: 'realName',
        type: 'string',
        notSpace: false,
      },
      {
        title: '编号',
        name: 'userSn',
        type: 'string',
        notSpace: false,
      },
      {
        title: '用户类别',
        name: 'userType',
        type: 'class',
        notSpace: false,
      },
      {
        title: '部门',
        name: 'depart',
        type: 'class',
        notSpace: false,
      },
    ],
    classes: {
      userType: {
        url: environment.searchUrl + 'api/p/crud/usertypes/',
        data: null,
      },
      depart: {
        url: environment.searchUrl + 'api/p/crud/departs/',
        data: null,
      },
    },
    subUrl: environment.searchUrl + 'api/p/crud/users/',
    limit: 10,
    page: 1,
  };

  configDepart = {
    name: '部门',
    columns: [
      {
        title: '名称',
        name: 'name',
        type: 'string',
        notSpace: false,
      },
      {
        title: '部门id',
        name: 'deptId',
        type: 'string',
        notSpace: false,
      },
    ],
    classes: {},
    subUrl: environment.searchUrl + 'api/p/crud/departs/',
    limit: 10,
    page: 1,
  };

  configUserType = {
    name: '类型',
    columns: [
      {
        title: '名称',
        name: 'name',
        type: 'string',
      },
      {
        title: '级别',
        name: 'level',
        type: 'number',
      },
    ],
    subUrl: environment.searchUrl + 'api/p/crud/usertypes/',
    limit: 10,
    page: 1,
  };

  configGroup = {
    name: '权限组',
    columns: [
      {
        title: '名称',
        name: 'name',
        type: 'string',
      },
      {
        title: '简介',
        name: 'brief',
        type: 'string',
      },
      {
        title: '基本信息',
        name: 'baseInfo',
        type: 'string',
      },
    ],
    subUrl: environment.searchUrl + 'api/p/crud/groups/',
    limit: 10,
    page: 1,
  };

  constructor() {}

  ngOnInit(): void {}
}
