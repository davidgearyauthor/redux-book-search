import { connect } from 'react-redux';
import Controls from '../components/controls';

const mapStateToProps = state => ({
  topic: state.topic,
  displayMode: state.displayMode,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
