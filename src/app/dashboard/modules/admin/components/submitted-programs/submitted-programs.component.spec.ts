import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedProgramsComponent } from './submitted-programs.component';

describe('SubmittedProgramsComponent', () => {
  let component: SubmittedProgramsComponent;
  let fixture: ComponentFixture<SubmittedProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
