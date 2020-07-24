import { connect } from 'react-redux';
import SectorOfActivity from './SectorOfActivity';

const mapStateToProps = (state: any) => {
  return {
    sectorOfActivityData: state.getDataReducer.sa_libell_secteur_d_activit,
  };
};

export default connect(mapStateToProps)(SectorOfActivity);
