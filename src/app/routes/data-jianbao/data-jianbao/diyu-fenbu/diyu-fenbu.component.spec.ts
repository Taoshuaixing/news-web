/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiyuFenbuComponent } from './diyu-fenbu.component';

describe('DiyuFenbuComponent', () => {
  let component: DiyuFenbuComponent;
  let fixture: ComponentFixture<DiyuFenbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiyuFenbuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyuFenbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
