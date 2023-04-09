import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCalendarComponent } from './basic-calendar.component';

describe('BasicCalendarComponent', () => {
  let component: BasicCalendarComponent;
  let fixture: ComponentFixture<BasicCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
