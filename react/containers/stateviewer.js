import { connect } from 'react-redux';
import StateViewer from '../components/stateviewer';
import stateHistory from '../statehistory';

const mapStateToProps = state => ({
  books:         state.books,
  topic:         state.topic,
  currentStatus: state.currentStatus,
  displayMode:   state.displayMode,
  history:       stateHistory,
});

export default connect(
  mapStateToProps,
  null
)(StateViewer);
