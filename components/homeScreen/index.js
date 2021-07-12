import HomeScreen from './HomeScreen';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getUsers, hideDetails, deleteUser} from '../../store/actions/Actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsers,
      hideDetails,
      deleteUser,
    },
    dispatch,
  );

const mapStateToProps = state => {
  return {
    usersData: state.root.usersData,
    loadingFlag: state.root.loadingFlag,
    deletedUsers: state.root.deletedUsers,
    selectedUser: state.root.selectedUser,
    showDetailsFlag: state.root.showDetailsFlag,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
