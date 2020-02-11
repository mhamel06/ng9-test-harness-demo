import { async, TestBed } from '@angular/core/testing';
import { FeatureActivityModule } from './feature-activity.module';

describe('FeatureActivityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureActivityModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureActivityModule).toBeDefined();
  });
});
