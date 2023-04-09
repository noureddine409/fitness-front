import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProgramsComponent } from './trainer-programs.component';

describe('ProgramsComponent', () => {
  let component: TrainerProgramsComponent;
  let fixture: ComponentFixture<TrainerProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
