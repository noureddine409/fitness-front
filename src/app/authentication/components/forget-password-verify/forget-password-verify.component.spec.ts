import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordVerifyComponent } from './forget-password-verify.component';

describe('ForgetPasswordVerifyComponent', () => {
  let component: ForgetPasswordVerifyComponent;
  let fixture: ComponentFixture<ForgetPasswordVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
