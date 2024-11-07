import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detail1Page } from './detail1.page';

describe('Detail1Page', () => {
  let component: Detail1Page;
  let fixture: ComponentFixture<Detail1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
