/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
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
