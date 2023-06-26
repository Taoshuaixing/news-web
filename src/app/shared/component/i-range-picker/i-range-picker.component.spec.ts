import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IRangePickerComponent } from './i-range-picker.component';

describe('IRangePickerComponent', () => {
  let component: IRangePickerComponent;
  let fixture: ComponentFixture<IRangePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IRangePickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
