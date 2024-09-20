import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonList } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from "@ionic/angular";
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.page.html',
  styleUrls: ['./user-management.page.scss'],
  standalone: true,
  imports: [IonList, IonButton, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UserManagementPage implements OnInit {

  tenkhachhang: string = '';
  SotaiKhoan: string = "";
  pin: string = "";
  formData!: FormGroup;
  isLoading: boolean = false;
  editIndex:  number | null  = null;

  // In ten nguoi dung
  username = [
    {tenkh: "Nguyen Tin", tuoi: 21},
  ]
  test_tk =[
    {name: "Nguyen Trung Tin", stk: "909090", pin: "012345", email: "2u73@gmail.com"},
    {name: "Nguyen Huy Hoang", stk: "365178", pin: "615777", email: "28126@gmail.com"},
  ];
  newUser = {};
  danhsachtk: any[] =[];
  khachHangChon: any
  
  getAccount(){
    
  }
  constructor(private router: Router, private alertCtrl: AlertController,  private route: ActivatedRoute) {
    this.khachHangChon = this.test_tk[0]; // Chọn khách hàng đầu tiên mặc định
    this.tenkhachhang = this.khachHangChon.ten;
   }
  addAccount(){
    if (this.formData.valid) {
      if (this.editIndex !== null) {
        this.danhsachtk[this.editIndex] = this.formData.value;
        this.editIndex = null;
      } else {
        this.danhsachtk.push(this.formData.value);
      }
      this.formData.reset(); // Đảm bảo gọi reset trên formData
    } else {
      this.showAlert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
    }
  }
  ViewAllAccount(){
    const accountsList = this.danhsachtk.map(account => `${account.name} - ${account.stk}`).join('<br>');
    this.showAlert('Tất cả tài khoản', accountsList);
  }
  async DeleteAccount(index: number){
    this.danhsachtk.splice(index, 1);
    this.showAlert('Thành công', 'Tài khoản đã được xóa.');
  }
  // show các nick
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
  async all(){
    this.showAlert('Tat ca tai khoan', '1.' + this.test_tk);
  }

  ngOnInit() {
  }

}
