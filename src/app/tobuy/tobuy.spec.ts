import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tobuy } from './tobuy';

describe('Tobuy', () => {
  let component: Tobuy;
  let fixture: ComponentFixture<Tobuy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tobuy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tobuy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
