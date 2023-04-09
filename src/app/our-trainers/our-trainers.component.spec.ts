import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTrainersComponent } from './our-trainers.component';

describe('OurTrainersComponent', () => {
  let component: OurTrainersComponent;
  let fixture: ComponentFixture<OurTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTrainersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
