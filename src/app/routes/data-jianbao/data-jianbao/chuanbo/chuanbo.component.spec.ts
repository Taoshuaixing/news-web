/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChuanboComponent } from './chuanbo.component';

describe('ChuanboComponent', () => {
  let component: ChuanboComponent;
  let fixture: ComponentFixture<ChuanboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChuanboComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuanboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
