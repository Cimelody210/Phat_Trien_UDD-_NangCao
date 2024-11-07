import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'detail1',
    loadComponent: () => import('./detail1/detail1.page').then( m => m.Detail1Page)
  },
  {
    path: 'detail2',
    loadComponent: () => import('./detail2/detail2.page').then( m => m.Detail2Page)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  
];
