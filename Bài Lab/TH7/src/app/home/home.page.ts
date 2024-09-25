import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {ToastController} from '@ionic/angular'
import { NavController, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AlertController  } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  addAccount(_t28: any) {
    throw new Error('Method not implemented.');
  }
  email: string = "2115277@gmail.com";
  password: string = "1234";
  errormessage: string| undefined;
  formData!: FormGroup;
  image: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router,  private alertCtrl: AlertController, private x: FormBuilder, private navCtrl: NavController, private toastController: ToastController) {
    this.formData = this.x.group({
      mail: ['', [Validators.required]],
      matkhau: ['', [Validators.required]],
    });
  }
  ngOnInit()  {}

  // Sử dụng await trong hàm presentToast là cần thiết vì phương thức create của ToastController trả về một Promise. Điều này có nghĩa là bạn cần chờ cho đến khi thông báo được tạo xong trước khi gọi present().
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }
  async showAlert(title: string, message: string){
    this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
      
    }).then(res =>{
      this.router.navigate(['/detail']);
      res.present();
    })
  }
  viewtoCamera(){
    this.navCtrl.navigateForward('/camera');
  }
  viewtouser(){
    this.navCtrl.navigateForward('/user-management');
  }
  ViewTodetail() {
    if(!this.email || !this.password){
      this.presentToast('Nhap ca 2 field');
    }
    if(this.email == "2115277@gmail.com" && this.password == "1234"){
      this.navCtrl.navigateForward('/detail');
    } else{
      this.presentToast('Dang nhap that bai');
    }
  }
}
