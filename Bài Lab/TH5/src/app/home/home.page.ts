import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ToastController} from '@ionic/angular'
import { NavController, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  email: string = "2115277@gmail.com";
  password: string = "1234";
  errormessage: string| undefined;
  formData!: FormGroup;

  constructor(private x: FormBuilder, private navCtrl: NavController, private toastController: ToastController) {
    this.formData = this.x.group({
      mail: ['', [Validators.required]],
      matkhau: ['', [Validators.required]],
    });
  }
  ngOnInit(): void  {}

  // Sử dụng await trong hàm presentToast là cần thiết vì phương thức create của ToastController trả về một Promise. Điều này có nghĩa là bạn cần chờ cho đến khi thông báo được tạo xong trước khi gọi present().
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }

  onSumit(){
    this.errormessage ='';
    // Chuyen form
    if(this.email  && this.password){
      this.navCtrl.navigateForward('/detail');
      this.presentToast("Dang nhap thanh cong");
    }
    else{
      this.presentToast('dgg');
    }
  }
}
