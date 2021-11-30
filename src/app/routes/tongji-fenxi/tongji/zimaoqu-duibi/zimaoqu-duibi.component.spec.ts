/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZimaoquDuibiComponent } from './zimaoqu-duibi.component';

describe('ZimaoquDuibiComponent', () => {
  let component: ZimaoquDuibiComponent;
  let fixture: ComponentFixture<ZimaoquDuibiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZimaoquDuibiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZimaoquDuibiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
