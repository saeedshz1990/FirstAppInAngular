import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCase2Component } from './switch-case2.component';

describe('SwitchCase2Component', () => {
  let component: SwitchCase2Component;
  let fixture: ComponentFixture<SwitchCase2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchCase2Component]
    });
    fixture = TestBed.createComponent(SwitchCase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
