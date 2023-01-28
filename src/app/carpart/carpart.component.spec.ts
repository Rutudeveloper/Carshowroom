import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpartComponent } from './carpart.component';

describe('CarpartComponent', () => {
  let component: CarpartComponent;
  let fixture: ComponentFixture<CarpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
