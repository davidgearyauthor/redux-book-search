import { combineReducers } from 'redux';
import stateHistory from './statehistory';

const defaults = {
  STATUS:       'Starting the application',
  TOPIC:        'javascript',
  DISPLAY_MODE: 'THUMBNAIL',
  STATE:        [],
};

const fetchReducer = (state = defaults.STATE, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return [];

    case 'FETCH_FAILED':
      alert('Fetch failed. Check your internet connection ' +
            'or change the query.');

      return [];

    case 'FETCH_COMPLETE':
      return action.json.items;

    default: 
      return state;
  }
};

const statusReducer = (state = defaults.STATUS, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return 'Fetching...';

    case 'FETCH_COMPLETE':
      return 'Fetch complete';

    case 'FETCH_FAILED':
      return 'Fetch failed ' + (action.error ? action.error : '');

    case 'SET_TOPIC':
      return 'Set topic to ' + action.topic;

    case 'SET_DISPLAY_MODE':
      return 'Set display mode to ' + action.displayMode;

    default:
      return state;
  }
};

const topicReducer = (state = defaults.TOPIC, action) => {
  switch (action.type) {
    case 'SET_TOPIC':
      return action.topic;

    default:
      return state;
  }
};

const bookDisplayReducer = (state = defaults.DISPLAY_MODE, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_MODE':
      return action.displayMode;

    default:
      return state;
  }
};

const undo = reducer => (state = stateHistory.present, action) => {
  switch (action.type) {
    case 'UNDO': 
      stateHistory.undo();  
      break;

    case 'REDO': {
      stateHistory.redo();
      break;
    }
    case 'GOTO': {
      stateHistory.gotoState(action.stateIndex);
      break;
    }
    default: {
      const newState = reducer(state, action);
      stateHistory.push(newState);
    }
  }

  return stateHistory.present;
};

// Combine reducers

export default undo(combineReducers({
  books:         fetchReducer,
  topic:         topicReducer,
  currentStatus: statusReducer,
  displayMode:   bookDisplayReducer,
}));
