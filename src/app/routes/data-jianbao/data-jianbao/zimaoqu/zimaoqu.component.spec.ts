/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZimaoquComponent } from './zimaoqu.component';

describe('ZimaoquComponent', () => {
  let component: ZimaoquComponent;
  let fixture: ComponentFixture<ZimaoquComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZimaoquComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZimaoquComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
