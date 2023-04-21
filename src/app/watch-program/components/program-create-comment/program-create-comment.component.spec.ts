import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCreateCommentComponent } from './program-create-comment.component';

describe('ProgramCreateCommentComponent', () => {
  let component: ProgramCreateCommentComponent;
  let fixture: ComponentFixture<ProgramCreateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCreateCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramCreateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
