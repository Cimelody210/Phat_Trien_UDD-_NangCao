import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from "@ionic/angular"
import { BookListComponent } from 'src/Component/book-list/book-list.component';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { cubeSharp } from 'ionicons/icons';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

@NgModule({
  declarations:[
    BookListComponent,
  ],
  bootstrap:[
    
  ],
  providers:[],
  imports:[
    CommonModule,
    BrowserModule, 
    IonicModule.forRoot() ,
  ],
  exports:[
    BookListComponent,
  ]
})
export class AppModule { }
