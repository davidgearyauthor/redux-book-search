/* eslint-disable no-unused-vars, consistent-return, no-console */

export const thunk = store => next => action => { 
  if (action.fn && typeof action.fn === 'function') {
    action.fn(store.dispatch, store.getState()); // invoke the action
  } else {
    return next(action); // dispatch normally
  }
};

export const logger = store => next => action => {
  console.log('MIDDLEWARE: Executing action ' + action.type);
  return next(action);
};

/* eslint-enable no-unused-vars, consistent-return, no-console */
