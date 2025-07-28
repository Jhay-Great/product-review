import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeedbackDashboardComponent } from './product-feedback-dashboard.component';

describe('ProductFeedbackDashboardComponent', () => {
  let component: ProductFeedbackDashboardComponent;
  let fixture: ComponentFixture<ProductFeedbackDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFeedbackDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFeedbackDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
