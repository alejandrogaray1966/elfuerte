import { TestBed } from '@angular/core/testing';

import { ProdCarri } from './prod-carri';

describe('ProdCarri', () => {
  let service: ProdCarri;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdCarri);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
