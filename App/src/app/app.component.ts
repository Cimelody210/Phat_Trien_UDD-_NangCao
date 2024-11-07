import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonApp, IonRouterOutlet, IonItem } from '@ionic/angular/standalone';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonItem, IonApp, NgFor, IonRouterOutlet, CommonModule],
})
export class AppComponent {
  constructor() {}
}