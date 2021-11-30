/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataJianbaoComponent } from './data-jianbao.component';

describe('DataJianbaoComponent', () => {
  let component: DataJianbaoComponent;
  let fixture: ComponentFixture<DataJianbaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataJianbaoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataJianbaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
