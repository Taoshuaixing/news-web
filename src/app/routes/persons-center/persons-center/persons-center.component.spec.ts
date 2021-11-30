/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonsCenterComponent } from './persons-center.component';

describe('PersonsCenterComponent', () => {
  let component: PersonsCenterComponent;
  let fixture: ComponentFixture<PersonsCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonsCenterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
