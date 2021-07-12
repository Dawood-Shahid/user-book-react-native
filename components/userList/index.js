import UserList from './UserList';
import {hideDetails, deleteUser} from '../../store/actions/Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hideDetails,
      deleteUser,
    },
    dispatch,
  );

const mapStateToProps = state => {
  return {
    // usersData: state.root.usersData,
    showDetailsFlag: state.root.showDetailsFlag,
    selectedUser: state.root.selectedUser,
    deletedUsers: state.root.deletedUsers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
