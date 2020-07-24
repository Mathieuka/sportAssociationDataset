import { connect } from 'react-redux';
import SectorOfActivity from './SectorOfActivity';

const mapStateToProps = (state: any) => {
  return {
    data: state.getDataReducer,
  };
};

export default connect(mapStateToProps)(SectorOfActivity);
