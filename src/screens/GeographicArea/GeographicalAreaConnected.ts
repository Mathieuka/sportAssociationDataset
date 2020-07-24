import { connect } from 'react-redux';
import GeographicalArea from './GeographicalArea';

const mapStateToProps = (state: any) => {
  return {
    data: state.getDataReducer,
  };
};

export default connect(mapStateToProps)(GeographicalArea);
