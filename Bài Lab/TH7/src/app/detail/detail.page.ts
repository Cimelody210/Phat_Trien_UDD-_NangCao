import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, EmailValidator } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel } from '@ionic/angular/standalone';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailPage implements OnInit {

  khachhang: string | undefined;
  constructor(private nav: NavParams){
    this.khachhang = this.nav.get('user');
  }
  ngOnInit() {
    // this.userData = this.userDataService.getUserData();
  }
  back(){
    // this.router.navigate(['/home']);
  }

}
