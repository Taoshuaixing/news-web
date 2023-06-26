/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CiyunComponent } from './ciyun.component';

describe('CiyunComponent', () => {
  let component: CiyunComponent;
  let fixture: ComponentFixture<CiyunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CiyunComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiyunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
