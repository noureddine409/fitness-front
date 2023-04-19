import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerBlogDetailsComponent } from './trainer-blog-details.component';

describe('TrainerBlogDetailsComponent', () => {
  let component: TrainerBlogDetailsComponent;
  let fixture: ComponentFixture<TrainerBlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerBlogDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
