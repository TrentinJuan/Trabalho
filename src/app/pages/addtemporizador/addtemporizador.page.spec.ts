import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtemporizadorPage } from './addtemporizador.page';

describe('AddtemporizadorPage', () => {
  let component: AddtemporizadorPage;
  let fixture: ComponentFixture<AddtemporizadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtemporizadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtemporizadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
