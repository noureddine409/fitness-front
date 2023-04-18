import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramVideoComponent } from './program-video.component';

describe('ProgramVideoComponent', () => {
  let component: ProgramVideoComponent;
  let fixture: ComponentFixture<ProgramVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
