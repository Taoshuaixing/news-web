/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataFenxiComponent } from './data-fenxi.component';

describe('DataFenxiComponent', () => {
  let component: DataFenxiComponent;
  let fixture: ComponentFixture<DataFenxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataFenxiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFenxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
