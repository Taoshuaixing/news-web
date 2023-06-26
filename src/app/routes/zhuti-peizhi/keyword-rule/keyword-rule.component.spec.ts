import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordRuleComponent } from './keyword-rule.component';

describe('KeywordRuleComponent', () => {
  let component: KeywordRuleComponent;
  let fixture: ComponentFixture<KeywordRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
