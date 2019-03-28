import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BevaragesPage } from './bevarages.page';

describe('BevaragesPage', () => {
  let component: BevaragesPage;
  let fixture: ComponentFixture<BevaragesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BevaragesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BevaragesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
