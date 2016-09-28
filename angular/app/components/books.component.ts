import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import store from '../../store';
import Book from './book.component';

@Component({
  selector: 'books',
  template: `
    <div *ngIf='status === "Fetching..."' 
      style='width: 100%; padding: 20px; text-align: center'>
      <img src="../images/spinner.gif" role="presentation" />
    </div>

    <div *ngIf='displayMode === "LIST"' style='width: 100%; padding: 20px;'>
      <ul>
        <li *ngFor='let book of books'>
          <book [item]='book'
                [displayMode]='displayMode'></book>
        </li>
      </ul>
    </div>

    <div *ngIf='displayMode === "THUMBNAIL"' style='padding: 20px;'>
      <book *ngFor='let book of books'
        [item]='book'
        [displayMode]='displayMode'>
      </book>
    </div>
  `
})

export default class Books {  
  private books: Array<Book>;
  private displayMode: string;
  private status: string;
  private unsubscribe: any;

  constructor() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();

      this.books = state.books; 
      this.displayMode = state.displayMode;
      this.status = state.currentStatus;
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
