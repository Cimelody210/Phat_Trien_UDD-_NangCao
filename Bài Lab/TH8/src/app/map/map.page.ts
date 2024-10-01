import { Component, OnInit, ViewChild, ElementRef, viewChild } from '@angular/core';
import { CommonModule, getCurrencySymbol } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation'; 
import { Route } from '@angular/router';

declare var google: { maps: { LatLng: new (arg0: any, arg1: any) => any; }; };
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MapPage implements OnInit {
  @ViewChild('map', {static: true})

  mapElement !: ElementRef;
  zoom: number =10;
  mapVisible: boolean = false;  // Biến điều khiển hiển thị bản đồ

  // map: GoogleMap;
  constructor() { 
    this.getCurrentLocation().then((position: any) =>{

    });
    
  }
  getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
        const locOptions = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
        Geolocation.getCurrentPosition(locOptions).then((position: any) => {
          resolve(position);
        }).catch(e => {
          reject(e.message);
        });
    });
  }
  async showMap(latitude: any, longitude: any){
    let latLng = new google.maps.LatLng(latitude, longitude);
    let mapPosition = {center: latLng, zoom: 10}
    // await this.loadMap();
  }
  
  goback(){
  }

  ngOnInit() {
  }

}
