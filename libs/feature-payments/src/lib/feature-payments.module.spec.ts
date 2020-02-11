import { async, TestBed } from '@angular/core/testing';
import { FeaturePaymentsModule } from './feature-payments.module';

describe('FeaturePaymentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturePaymentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturePaymentsModule).toBeDefined();
  });
});
