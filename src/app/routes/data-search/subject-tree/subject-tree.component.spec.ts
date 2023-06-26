import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTreeComponent } from './subject-tree.component';

describe('SubjectTreeComponent', () => {
  let component: SubjectTreeComponent;
  let fixture: ComponentFixture<SubjectTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
