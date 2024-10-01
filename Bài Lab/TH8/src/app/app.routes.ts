import { Routes, RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {IonicModule} from '@ionic/angular'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


NgModule({
  imports:[
    FormsModule,
    IonicModule.forRoot(),
  ],
})

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
    path: 'detail',
    loadComponent: () => import('./detail/detail.page').then( m => m.DetailPage)
  },
  {
    path: 'user-management',
    loadComponent: () => import('./user-management/user-management.page').then( m => m.UserManagementPage)
  },
  {
    path: 'camera',
    loadComponent: () => import('./camera/camera.page').then( m => m.CameraPage)
  },
  {
    path: 'map',
    loadComponent: () => import('./map/map.page').then( m => m.MapPage)
  },
];
