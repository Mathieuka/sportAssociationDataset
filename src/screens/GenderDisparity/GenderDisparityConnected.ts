import { connect } from 'react-redux';
import GenderDisparity from './GenderDisparity';

const mapStateToProps = (state: any) => {
  return {
    genderData: state.getDataReducer.genderPercentage,
  };
};

export default connect(mapStateToProps)(GenderDisparity);
