/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatasTongjiComponent } from './datas-tongji.component';

describe('DatasTongjiComponent', () => {
  let component: DatasTongjiComponent;
  let fixture: ComponentFixture<DatasTongjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatasTongjiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasTongjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
