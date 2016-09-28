import { Component } from '@angular/core';
import store from '../../store';
import stateHistory from '../../statehistory';

@Component({
  selector: 'state-viewer',
  template: `
  <hr/>

  <span style='font-style: tahoma; font-size: 1.5em'>
    Application State
  </span>

  <div style='padding-top: 10px'>
    Topic: {{state.topic}}<br />
    Display mode: {{state.displayMode}}<br />
    Books displayed:   {{ state.books.length }}<br />
    Actions processed: {{ stateHistory.past.length + 
                          stateHistory.future.length + 1 }}<br />
    Current action:    {{ stateHistory.past.length + 1 }}
  </div>
  `
})

export default class StateViewer {  
  private state: any;
  private stateHistory: any;
  private unsubscribe: any;

  constructor(
  ){
    this.state = store.getState();
    this.stateHistory = stateHistory;

    this.unsubscribe = store.subscribe(() => {
      this.state = store.getState();
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
