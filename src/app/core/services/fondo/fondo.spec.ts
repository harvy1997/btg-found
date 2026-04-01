import { TestBed } from '@angular/core/testing';

import { FondoStore } from './fondo';

describe('Fondo', () => {
  let service: FondoStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondoStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
