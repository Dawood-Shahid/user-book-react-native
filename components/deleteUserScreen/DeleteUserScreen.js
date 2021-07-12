/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View} from 'react-native';

import styles from './styles';
import UserList from '../userList/UserList';
import UserDetails from '../userList/user/UserDetails';

const DeleteUserScreen = ({
  deletedUsers,
  showDetailsFlag,
  selectedUser,
  hideDetails,
  recoverUser,
}) => {
  return (
    <View>
      <View style={styles.deleteScreenContainer}>
        <UserList list={deletedUsers} />
      </View>
      {showDetailsFlag && selectedUser.deleteFlag && (
        <UserDetails
          hide={hideDetails}
          handler={data => recoverUser(data)}
          data={selectedUser}
        />
      )}
      {/* <View>
        <Text>pagination</Text>
      </View> */}
    </View>
  );
};

export default DeleteUserScreen;
