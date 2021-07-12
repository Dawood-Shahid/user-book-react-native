/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import UserList from '../userList';
import UserDetails from '../userList/user/UserDetails';
import Loader from '../loader';

const HomeScreen = ({
  getUsers,
  showDetailsFlag,
  usersData,
  selectedUser,
  hideDetails,
  deleteUser,
  loadingFlag,
}) => {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <View>
      <View style={styles.homeScreenContainer}>
        <UserList list={usersData} />
        {loadingFlag && <Loader />}
      </View>
      {showDetailsFlag && !selectedUser.deleteFlag && (
        <UserDetails
          hide={hideDetails}
          handler={data => deleteUser(data)}
          data={selectedUser}
        />
      )}
      {/* {loadingFlag && <Loader />} */}
    </View>
  );
};

export default HomeScreen;
