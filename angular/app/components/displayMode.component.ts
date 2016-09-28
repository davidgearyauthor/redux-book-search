
import { Component } from '@angular/core';
import store from '../../store';
import { setDisplayMode } from '../../actions';

@Component({
  selector: 'display-mode',
  template: `
    <span>
      <label for='thumbnailRadio'>Thumbnail</label>

      <input id="thumbnailRadio" style="cursor: pointer"
        type="radio" 
        name="display_mode" 
        value="Thumbnail"
        [checked]='displayMode === "THUMBNAIL"'
        (change)="setMode('THUMBNAIL')"/> 
      
      <label for='listRadio'>List</label>

      <input id="listRadio" style="cursor: pointer"
        type="radio" 
        name="display_mode" 
        value="List"
        [checked]='displayMode === "LIST"'
        (change)="setMode('LIST')"/>
    </span>
    `
})

export default class DisplayMode {
  private displayMode: string;
  private unsubscribe: any;

  constructor() {
    this.unsubscribe = store.subscribe(() => {
      this.displayMode = store.getState().displayMode;
    });
  }

  setMode(value) { 
    store.dispatch(setDisplayMode(value));
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
