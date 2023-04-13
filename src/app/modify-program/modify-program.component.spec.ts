import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProgramComponent } from './modify-program.component';

describe('ModifyProgramComponent', () => {
  let component: ModifyProgramComponent;
  let fixture: ComponentFixture<ModifyProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
