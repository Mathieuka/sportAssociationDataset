import { connect } from 'react-redux';
import GenderDisparity from './GenderDisparity';

const mapStateToProps = (state: any) => {
  return {
    genderData: state.getDataReducer.pv_public_vis,
  };
};

export default connect(mapStateToProps)(GenderDisparity);
