import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DetailBookComponent } from '../detail-book/detail-book.component';

interface Book{
  Author: string,
  Description: string,
  Title: string,
  Image: string,
  Price: Int16Array
};

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {

  @Output() selectedProduct = new EventEmitter<Book>();
  products: Book[] = [];

  constructor() { }

  ngOnInit() {}

}
