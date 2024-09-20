import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailPage implements OnInit {

  tenkhachhang: string = '';
  SotaiKhoan: string = "";
  pin: string = "";
  formData!: FormGroup;
  isLoading: boolean = false;

  // In ten nguoi dung
  username = [
    {tenkh: "Nguyen Tin", tuoi: 21},
  ]
  test_tk =[
    {name: "Nguyen Trung Tin", stk: "909090", pin: "012345"},
    {name: "Nguyen Huy Hoang", stk: "365178", pin: "615777"},
  ];
  khachHangChon: any
  getAccount(){
    return 1;
  }
  constructor(private router: Router, private route: ActivatedRoute) {
    this.khachHangChon = this.test_tk[0]; // Chọn khách hàng đầu tiên mặc định
    this.tenkhachhang = this.khachHangChon.ten;
   }
  add(){

  }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['/home']);
  }

}
