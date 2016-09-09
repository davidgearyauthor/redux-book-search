import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { logger, thunk } from './middleware';

export default createStore(reducers, compose(applyMiddleware(logger, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f));
