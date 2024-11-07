import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopUpXacNhanDangNhapComponent } from './pop-up-xac-nhan-dang-nhap.component';

describe('PopUpXacNhanDangNhapComponent', () => {
  let component: PopUpXacNhanDangNhapComponent;
  let fixture: ComponentFixture<PopUpXacNhanDangNhapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpXacNhanDangNhapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopUpXacNhanDangNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
