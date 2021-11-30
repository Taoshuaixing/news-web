/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChinaDataMapComponent } from './china-data-map.component';

describe('ChinaDataMapComponent', () => {
  let component: ChinaDataMapComponent;
  let fixture: ComponentFixture<ChinaDataMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChinaDataMapComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinaDataMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
