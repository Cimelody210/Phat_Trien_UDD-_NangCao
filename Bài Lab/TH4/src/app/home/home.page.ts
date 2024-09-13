import { Component } from '@angular/core';
import { ExceptionCode } from '@capacitor/core';
import { Route } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput, IonList } from '@ionic/angular/standalone';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonList, IonInput, IonLabel, IonItem, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  
  constructor(private navCtrl: NavController) {}
  navigateDetail(){
    this.navCtrl.navigateForward('/kh-detail');
  }
  goBack(){
    this.navCtrl.navigateBack('/home');
  }
  // Tai khoan  	
  tenkhachhang: string = '';
  SotaiKhoan: string = "";
  matkhau: string = "";
  pin: string = "";

  // Số tiền
  TienRut: number = 0;
  TienGui: number = 0;
  // SoDu: number = this.TienGui + this.TienRut;
  SoDu: number = 0;

  // Trang thai dang nhap
  loginsuccess: boolean= false;
  router: any;
  GetTen(): string{
    return this.tenkhachhang;
  }
  GetSoDu(): number{
    return this.SoDu;
  }
  Check_SoDu(){
    alert('So du hien tai cua quy khach la: ' + this.SoDu);
  }
  RutTien(){
    if(this.TienRut <= 0){
      alert('So tien phai lon hon 0');
      return;
    }
    if (this.TienRut > this.SoDu){
      alert('So tien phai nho hon so du: Vui long nhap lai so tien');
      return;
    }
    this.SoDu -= this.TienRut;
    alert('Ban da rut' + this.TienRut + ', va hien tai so du con la: '+ this.SoDu);
    this.TienRut =0;
  }
  NapTien(){
    if( this.TienGui <= 0){
      alert('So tien phai lon hon 0');
      return;
    }
    this.SoDu += this.TienGui;
    alert('Hien tai so du cua ban la: ' + this.SoDu + '(new)');
    this.TienGui = 0;
  }
  
}