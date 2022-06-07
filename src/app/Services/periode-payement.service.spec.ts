import { TestBed } from '@angular/core/testing';

import { PeriodePayementService } from './periode-payement.service';

describe('PeriodePayementService', () => {
  let service: PeriodePayementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodePayementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
