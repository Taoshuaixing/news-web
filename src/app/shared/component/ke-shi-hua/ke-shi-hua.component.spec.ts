/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeShiHuaComponent } from './ke-shi-hua.component';

describe('KeShiHuaComponent', () => {
  let component: KeShiHuaComponent;
  let fixture: ComponentFixture<KeShiHuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeShiHuaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeShiHuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
