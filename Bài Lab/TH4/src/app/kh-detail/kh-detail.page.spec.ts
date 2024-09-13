import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KhDetailPage } from './kh-detail.page';

describe('KhDetailPage', () => {
  let component: KhDetailPage;
  let fixture: ComponentFixture<KhDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KhDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
