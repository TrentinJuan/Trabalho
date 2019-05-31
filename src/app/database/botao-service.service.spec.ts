import { TestBed } from '@angular/core/testing';

import { BotaoServiceService } from './botao-service.service';

describe('BotaoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BotaoServiceService = TestBed.get(BotaoServiceService);
    expect(service).toBeTruthy();
  });
});
