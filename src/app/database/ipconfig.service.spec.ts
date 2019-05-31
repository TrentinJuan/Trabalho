import { TestBed } from '@angular/core/testing';

import { IpconfigService } from './ipconfig.service';

describe('IpconfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpconfigService = TestBed.get(IpconfigService);
    expect(service).toBeTruthy();
  });
});
