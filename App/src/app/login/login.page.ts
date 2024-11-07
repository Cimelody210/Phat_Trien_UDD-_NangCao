import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonIcon, IonText, IonCheckbox, IonicSafeString } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService  } from "../service/app.service";
import { Router } from '@angular/router';
import { IonicModule } from "@ionic/angular";
import { PasswordService } from '../service/password.service';
import { addIcons } from 'ionicons';
import { logoIonic, arrowBack } from 'ionicons/icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonText, IonIcon, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';
  passwordValid: boolean = false;
  
  user: any;
  checkbox: boolean = false;

  constructor(private router: Location, private passValid: PasswordService, private authService: AuthService, private navigate: Router) {
      addIcons({arrowBack});
  }
  checkValidPassword(){
    this.passwordValid = this.passValid.isValidPassword(this.password);
  }
  onSubmit(){
    if(this.loginForm.valid){
      const {username, password} = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        _Response =>{
          console.log('SUCCESS');
        }
      );
    }
  }
  gotoHome(){
    this.router.back();
  }
  gotoSignUp(){
    this.navigate.navigate(['/signup'])
  }
  loadUser(userID: number){

  }
  
  ngOnInit() {
  }

}
