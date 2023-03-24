import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMultiComponent } from './my-multi.component';

describe('MyMultiComponent', () => {
  let component: MyMultiComponent;
  let fixture: ComponentFixture<MyMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMultiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
