import { gotoState, redo, undo } from '../../actions';
import stateHistory from '../../statehistory';
import store from '../../store';

export default class History {  
  private leftArrow: string;
  private rightArrow: string;
  private stateHistory: any;
  private topic: string;
  private unsubscribe: any;
  private value: number;
  private maximum: number;

  constructor() {
    this.leftArrow = '&larr;';
    this.rightArrow = '&rarr;';

    this.stateHistory = stateHistory;

    this.unsubscribe = store.subscribe(() => {
      this.topic = store.getState().topic;
      this.maximum = this.max();
      this.value = this.val();
    });
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
