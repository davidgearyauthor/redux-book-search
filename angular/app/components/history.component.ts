import { Component } from '@angular/core';
import { gotoState, redo, undo } from '../../actions';
import stateHistory from '../../statehistory';
import store from '../../store';

@Component({
  selector: 'history',
  template: `
  <input type='range' #range
    style='cursor: pointer'
    min={1} 
    (input)='setState(range.value)'
    [max]='maximum'
    [value]='value'/>

  <a href='#' style='text-decoration: none'
    (click)='previousState()'
    [innerHTML] = 'leftArrow'>
  </a>

  <a href='#' style='text-decoration: none'
    (click)='nextState()'
    [innerHTML] = 'rightArrow'>
  </a>
  `
})

export default class History {  
  private leftArrow: string;
  private rightArrow: string;
  private stateHistory: any;
  private topic: string;
  private unsubscribe: any;
  private value: number;
  private maximum: number;

  constructor() {
    this.stateHistory = stateHistory;

    this.unsubscribe = store.subscribe(() => {
      this.setArrows();

      this.topic = store.getState().topic;
      this.maximum = this.max();
      this.value = this.val();
    });
  }

  setArrows() {
    const last = stateHistory.past.length + stateHistory.future.length;
    const index = stateHistory.getIndex();

    this.leftArrow = index === 0 ? '' : '&larr;';
    this.rightArrow = index === last ? '' : '&rarr;';
  }

  setState(stateIndex) {
    store.dispatch(gotoState(stateIndex));
  }

  previousState() {
    store.dispatch(undo());
  }

  nextState() {
    store.dispatch(redo());
  }
  
  val() {
    return this.stateHistory.past ? this.stateHistory.past.length : 0;
  }

  max() {
    return (this.stateHistory.past    ? this.stateHistory.past.length   : 0) +
           (this.stateHistory.present ? 1 : 0)             +
           (this.stateHistory.future  ? this.stateHistory.future.length : 0) - 1;
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
