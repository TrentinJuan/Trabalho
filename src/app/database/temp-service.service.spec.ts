import { TestBed } from '@angular/core/testing';

import { TempServiceService } from './temp-service.service';

describe('TempServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempServiceService = TestBed.get(TempServiceService);
    expect(service).toBeTruthy();
  });
});
