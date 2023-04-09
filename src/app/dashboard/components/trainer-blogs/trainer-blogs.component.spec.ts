import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerBlogsComponent } from './trainer-blogs.component';

describe('BlogsComponent', () => {
  let component: TrainerBlogsComponent;
  let fixture: ComponentFixture<TrainerBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
