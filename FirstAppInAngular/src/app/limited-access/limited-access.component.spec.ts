import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedAccessComponent } from './limited-access.component';

describe('LimitedAccessComponent', () => {
  let component: LimitedAccessComponent;
  let fixture: ComponentFixture<LimitedAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitedAccessComponent]
    });
    fixture = TestBed.createComponent(LimitedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
