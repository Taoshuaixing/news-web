import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuteComponent } from './statute.component';

describe('StatuteComponent', () => {
  let component: StatuteComponent;
  let fixture: ComponentFixture<StatuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatuteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
