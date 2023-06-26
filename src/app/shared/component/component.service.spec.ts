/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentService } from './component.service';

describe('Service: Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentService],
    });
  });

  it('should ...', inject([ComponentService], (service: ComponentService) => {
    expect(service).toBeTruthy();
  }));
});
