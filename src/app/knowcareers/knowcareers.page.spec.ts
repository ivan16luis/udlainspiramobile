import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowcareersPage } from './knowcareers.page';

describe('KnowcareersPage', () => {
  let component: KnowcareersPage;
  let fixture: ComponentFixture<KnowcareersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowcareersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowcareersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
