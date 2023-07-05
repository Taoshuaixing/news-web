/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-03-15 18:23:34
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-05 11:09:07
 */
/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CrudServiceService } from './crud-service.service';

describe('Service: CrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudServiceService],
    });
  });

  it('should ...', inject([CrudServiceService], (service: CrudServiceService) => {
    expect(service).toBeTruthy();
  }));
});
