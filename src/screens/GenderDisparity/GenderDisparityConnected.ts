import { connect } from 'react-redux';
import GenderDisparity from './GenderDisparity';

const mapStateToProps = (state: any) => {
  return {
    data: state.getDataReducer,
  };
};

export default connect(mapStateToProps)(GenderDisparity);
