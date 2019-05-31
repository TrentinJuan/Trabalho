import { TestBed } from '@angular/core/testing';

import { TipoSaidaService } from './tipo-saida.service';

describe('TipoSaidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoSaidaService = TestBed.get(TipoSaidaService);
    expect(service).toBeTruthy();
  });
});
