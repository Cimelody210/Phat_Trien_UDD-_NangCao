import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonText } from '@ionic/angular/standalone';
import { BookDetail } from '../detail1/detail1.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonText, IonLabel, IonInput, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {
  checkbox: boolean= false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoLogin(){
    this.router.navigate(['/login'])
  }
  CheckValid(){

  }

}
