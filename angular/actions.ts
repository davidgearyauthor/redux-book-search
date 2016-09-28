/* fetchCurrentTopic() is invoked by the thunk middleware
 * implemented in ./middleware.js. That middleware calls
 * fetchCurrentTopic() and passes it the dispatch and state.
*/

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const fetchStart = () => ({
  type: 'FETCH_STARTED',
});

const fetchComplete = json => ({
  type: 'FETCH_COMPLETE',
  json,
});

const fetchFailed = error => ({
  type: 'FETCH_FAILED',
  error,
});

const fetchCurrentTopic = (dispatch, state) => {
  dispatch(fetchStart());

  fetch(URL + state.topic)
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        dispatch(fetchFailed(json.error));
      } else {
        dispatch(fetchComplete(json));
      }
    })
    .catch((json) => {
      dispatch(fetchFailed(json.error));
    });
};

export const fetchBooks = () => ({
  type: 'BEGIN_FETCH',
  fn: fetchCurrentTopic,
});

export const setTopic = topic => ({
  type: 'SET_TOPIC',
  topic,
});

export const setDisplayMode = displayMode => ({
  type: 'SET_DISPLAY_MODE',
  displayMode,
});

export const redo = () => ({
  type: 'REDO',
});

export const undo = () => ({
  type: 'UNDO',
});

export const gotoState = stateIndex => ({
  type: 'GOTO',
  stateIndex,
});
