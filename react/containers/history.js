import { connect } from 'react-redux';
import { undo, redo, gotoState } from '../actions';
import { History } from '../components/history';
import stateHistory from '../statehistory';

const mapStateToProps = () => ({
  past: stateHistory.past,
  present: stateHistory.present,
  future: stateHistory.future,
});

const mapDispatchToProps = dispatch => ({
  undo: () => {
    dispatch(undo());
  },

  redo: () => {
    dispatch(redo());
  },

  gotoState: stateIndex => {
    dispatch(gotoState(stateIndex));
  },
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(History);
