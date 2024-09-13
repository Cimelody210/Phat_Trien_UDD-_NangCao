import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-kh-detail',
  templateUrl: './kh-detail.page.html',
  styleUrls: ['./kh-detail.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class KhDetailPage implements OnInit {
  goBack() {
    throw new Error('Method not implemented.');
  }

  private kh_list = [
    {stk: 1234, ten :"Nguyen Huy Hoang", sodu : 100000 },
    {stk: 5678, ten :"Ho Trong Minh Chien", sodu : 200000 }
  ];
  constructor() { }
  
  get_KHList(){
    return this.kh_list;
  }
  

  ngOnInit() {
    
  }

}
