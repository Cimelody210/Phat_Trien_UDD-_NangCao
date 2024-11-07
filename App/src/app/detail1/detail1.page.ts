import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon, IonText, IonImg, IonButton } from '@ionic/angular/standalone';
import { FirebaseError, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { image, arrowBack, cart, star } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { AppModule } from "../app.module";

export interface BookDetail{
  id: number;
  Price: number;
  image: string;
  Author: string;
  Desciption: string;
  numberofpage: number;
  star: number
}
@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.page.html',
  styleUrls: ['./detail1.page.scss'],
  standalone: true,
  imports: [IonButton, IonImg, IonText, IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, AppModule]
})
export class Detail1Page implements OnInit {
  title: string = 'djhfhwywyhd';

  constructor(private router: Router) {
    addIcons({star,cart,arrowBack}); 
  }
  ngOnInit() {
    // throw new Error('Method not implemented.');
  }
  gotoHome(){
    this.router.navigate(['/home'])
  }
  Check_NumberPage(so :number): boolean {
    return Number.isSafeInteger(so) && so >=0;
  }
}
