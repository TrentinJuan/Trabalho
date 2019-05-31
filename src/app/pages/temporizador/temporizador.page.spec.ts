import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporizadorPage } from './temporizador.page';

describe('TemporizadorPage', () => {
  let component: TemporizadorPage;
  let fixture: ComponentFixture<TemporizadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporizadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporizadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
