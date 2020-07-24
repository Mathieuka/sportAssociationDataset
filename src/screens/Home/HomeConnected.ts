import { connect } from 'react-redux';
import Home from './Home';
import { bindActionCreators } from 'redux';
import { getData } from '../../redux/actions/index';

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      getData,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(Home);
