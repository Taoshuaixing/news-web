/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QingbaoComponent } from './qingbao.component';

describe('QingbaoComponent', () => {
  let component: QingbaoComponent;
  let fixture: ComponentFixture<QingbaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QingbaoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QingbaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
