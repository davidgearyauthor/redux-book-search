import { Component } from '@angular/core';

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
