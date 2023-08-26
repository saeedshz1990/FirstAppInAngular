import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCase4Component } from './switch-case4.component';

describe('SwitchCase4Component', () => {
  let component: SwitchCase4Component;
  let fixture: ComponentFixture<SwitchCase4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchCase4Component]
    });
    fixture = TestBed.createComponent(SwitchCase4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
