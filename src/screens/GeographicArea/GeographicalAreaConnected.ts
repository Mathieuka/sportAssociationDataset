import { connect } from 'react-redux';
import GeographicalArea from './GeographicalArea';

const mapStateToProps = (state: any) => {
  return {
    geographicalData: state.getDataReducer.geographicalGroupPercentage,
  };
};

export default connect(mapStateToProps)(GeographicalArea);
