import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { BookDetail } from '../detail1/detail1.page';

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.page.html',
  styleUrls: ['./detail2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Detail2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
