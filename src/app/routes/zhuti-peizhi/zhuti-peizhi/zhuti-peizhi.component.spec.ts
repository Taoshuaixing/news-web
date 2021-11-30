/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZhutiPeizhiComponent } from './zhuti-peizhi.component';

describe('ZhutiPeizhiComponent', () => {
  let component: ZhutiPeizhiComponent;
  let fixture: ComponentFixture<ZhutiPeizhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZhutiPeizhiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhutiPeizhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
