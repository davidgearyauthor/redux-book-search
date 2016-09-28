import { Component } from '@angular/core';
import { fetchBooks, setTopic } from '../../actions';
import store from '../../store';

@Component({
  selector: 'topic-selector',
  template: `
    <label for='topic'>Topic</label>

    <input #topicInput 
      [(ngModel)]='topic'
      (input)='setTopic(topicInput.value)'
      (keyup.enter)='fetchTopic(topicInput.value)' 
      autofocus/>
  `
})

export default class TopicSelector {  
  private topic: string;
  private unsubscribe: any;

  constructor() {
    store.subscribe(() => {
      this.topic = store.getState().topic;
    });
  }

  setTopic(newTopic) {
    store.dispatch(setTopic(newTopic));
  }

  fetchTopic(newTopic) {
    store.dispatch(fetchBooks());
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
