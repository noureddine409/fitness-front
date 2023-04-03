import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesItemsComponent } from './our-services-items.component';

describe('OurServicesItemsComponent', () => {
  let component: OurServicesItemsComponent;
  let fixture: ComponentFixture<OurServicesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicesItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
