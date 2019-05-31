import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSaidaPage } from './tipo-saida.page';

describe('TipoSaidaPage', () => {
  let component: TipoSaidaPage;
  let fixture: ComponentFixture<TipoSaidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSaidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSaidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
