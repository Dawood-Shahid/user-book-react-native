import DeleteUserScreen from './DeleteUserScreen';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {hideDetails, recoverUser} from '../../store/actions/Actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hideDetails,
      recoverUser,
    },
    dispatch,
  );

const mapStateToProps = state => {
  return {
    showDetailsFlag: state.root.showDetailsFlag,
    selectedUser: state.root.selectedUser,
    deletedUsers: state.root.deletedUsers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserScreen);
