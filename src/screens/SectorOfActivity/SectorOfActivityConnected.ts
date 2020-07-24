import { connect } from 'react-redux';
import SectorOfActivity from './SectorOfActivity';

const mapStateToProps = (state: any) => {
  return {
    sectorOfActivityData: state.getDataReducer.sectorPercentage,
  };
};

export default connect(mapStateToProps)(SectorOfActivity);
