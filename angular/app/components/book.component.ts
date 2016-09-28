import { Component, Input } from '@angular/core';
import store from '../../store';

@Component({
  selector: 'book',
  template: `
    <span *ngIf='displayMode === "THUMBNAIL"' style='padding: 10px'>
      <a href={{item.volumeInfo.canonicalVolumeLink}}>
        <img src={{item.volumeInfo.imageLinks.thumbnail}}/>
      </a>
    </span>

    <span *ngIf='displayMode === "LIST"'>
      <a href={{item.volumeInfo.canonicalVolumeLink}}>
        {{item.volumeInfo.title}}
      </a>
    </span>
  `
})

export default class Book {
  @Input() item: any;
  @Input() displayMode: string;
}
