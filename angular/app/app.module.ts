import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import App from './components/app.component';
import Book from './components/book.component';
import Books from './components/books.component';
import Controls from './components/controls.component';
import DisplayMode from './components/displayMode.component';
import History from './components/history.component';
import StateViewer from './components/stateviewer.component';
import TopicSelector from './components/topicselector.component';

@NgModule({
  bootstrap: [ App ],

  declarations: [ 
    App, 
    Book,
    Books,
    Controls, 
    DisplayMode, 
    History, 
    StateViewer,
    TopicSelector,
  ],

  imports: [ 
    BrowserModule, 
    FormsModule,
  ],
})

export class AppModule { }

