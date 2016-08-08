import { connect } from 'react-redux';
import Books from '../components/books';

const mapStateToProps = state => ({
  books:         state.books,
  topic:         state.topic,
  currentStatus: state.currentStatus,
  displayMode:   state.displayMode,
});

export default connect(
  mapStateToProps,
  null
)(Books);
