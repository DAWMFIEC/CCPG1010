import { TestBed } from '@angular/core/testing';

import { VecinosService } from './vecinos.service';

describe('VecinosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VecinosService = TestBed.get(VecinosService);
    expect(service).toBeTruthy();
  });
});
