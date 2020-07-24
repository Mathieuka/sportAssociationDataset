import { connect } from 'react-redux';
import GeographicalArea from './GeographicalArea';

const mapStateToProps = (state: any) => {
  return {
    geographicalData: state.getDataReducer.cp_adresse_code_postal,
  };
};

export default connect(mapStateToProps)(GeographicalArea);
