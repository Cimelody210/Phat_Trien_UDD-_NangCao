import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Detail1Page } from 'src/app/detail1/detail1.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  routes: Routes = [
    {
      path: '',
      component: Detail1Page,
    }
  ];
  public isValidPassword(password: string): boolean {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;
    return regex.test(password);
  }
  getUser(){

  }
  CheckValidPassword(){
    
  }

  constructor() { }

  ngOnInit() {}

}
