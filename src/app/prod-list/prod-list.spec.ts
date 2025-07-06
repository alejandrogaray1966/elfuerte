import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdList } from './prod-list';

describe('ProdList', () => {
  let component: ProdList;
  let fixture: ComponentFixture<ProdList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
