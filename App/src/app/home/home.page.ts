import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSearchbar, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic, personCircle, searchOutline, star, cart } from 'ionicons/icons';
import { AppModule } from "../app.module";
import { Detail2Page } from "../detail2/detail2.page";
import { LoginPage } from "../login/login.page";
import { SignupPage } from "../signup/signup.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonInput, IonLabel, IonSearchbar, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, AppModule, Detail2Page, LoginPage, SignupPage],
})
export class HomePage {

  images: string[] =[
    '../../assets/AnhMinhHoa/BookImage/vap-nga-de-truong-thanh.jpg',
    '../../assets/AnhMinhHoa/BookImage/toidihoc.jpg',
  ]
  constructor(private router: Router) {
    addIcons({searchOutline,star,cart,personCircle});
  }
  async PopUpForbtn_Buy(){
    
  }
  gotoItem1(){
    this.router.navigate(['/detail1'])
  }
  gotoSignUp(){
    this.router.navigate(['/signup'])
  }
  gotoItem2(){
    this.router.navigate(['/detail2'])
  }
  gotoLogin(){
    this.router.navigate(['/login'])
  }
}