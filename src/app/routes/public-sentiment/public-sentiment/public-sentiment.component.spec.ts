import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSentimentComponent } from './public-sentiment.component';

describe('PublicSentimentComponent', () => {
  let component: PublicSentimentComponent;
  let fixture: ComponentFixture<PublicSentimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSentimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
