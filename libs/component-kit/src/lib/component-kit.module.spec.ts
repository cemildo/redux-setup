import { async, TestBed } from '@angular/core/testing';
import { ComponentKitModule } from './component-kit.module';

describe('ComponentKitModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentKitModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentKitModule).toBeDefined();
  });
});
