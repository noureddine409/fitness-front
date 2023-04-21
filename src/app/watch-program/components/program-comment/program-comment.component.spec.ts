import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCommentComponent } from './program-comment.component';

describe('ProgramCommentComponent', () => {
  let component: ProgramCommentComponent;
  let fixture: ComponentFixture<ProgramCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
