import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { logger, thunk } from './middleware';

export default createStore(reducers, applyMiddleware(logger, thunk));
