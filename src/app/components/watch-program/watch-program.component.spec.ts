import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchProgramComponent } from './watch-program.component';

describe('WatchProgramComponent', () => {
  let component: WatchProgramComponent;
  let fixture: ComponentFixture<WatchProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
