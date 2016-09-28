import { Component } from '@angular/core';

import Books from './books.component';
import Controls from './controls.component';
import StateViewer from './stateviewer.component';

import store from '../../store';
import { fetchBooks, setTopic } from '../../actions';

@Component({
  selector: 'app',
  template: `
    <div style='text-align: center; font-size: 1.5em'>
     {{app.title}}
    </div>

    <hr/>

    <controls></controls>
    <books></books>
    <state-viewer></state-viewer>`
})

export default class {
  ngOnInit() {
    store.dispatch(setTopic('Border collies'));
    store.dispatch(fetchBooks());
  }

  app = {
    title: 'Book Search (Angular version)',
  };
}

