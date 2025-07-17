import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInteger } from './input-integer';

describe('InputInteger', () => {
  let component: InputInteger;
  let fixture: ComponentFixture<InputInteger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputInteger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputInteger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
