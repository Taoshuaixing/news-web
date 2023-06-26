import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartManagerComponent } from './depart-manager.component';

describe('DepartManagerComponent', () => {
  let component: DepartManagerComponent;
  let fixture: ComponentFixture<DepartManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
