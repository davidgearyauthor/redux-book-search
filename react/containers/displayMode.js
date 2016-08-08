import { connect } from 'react-redux';
import { setDisplayMode } from '../actions';
import DisplayMode from '../components/displayMode';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  setListing: () => {
    dispatch(setDisplayMode('LISTING'));
  },

  setThumbnail: () => {
    dispatch(setDisplayMode('THUMBNAIL'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayMode);
