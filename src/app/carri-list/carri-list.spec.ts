import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriList } from './carri-list';

describe('CarriList', () => {
  let component: CarriList;
  let fixture: ComponentFixture<CarriList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarriList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarriList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
