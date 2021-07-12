import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';

import styles from './styles';
import User from './user/User';

const UserList = ({list}) => {
  useEffect(() => {
    // getUsers();
  });
  return (
    <ScrollView style={styles.userListSection}>
      {list.map(user => (
        <User key={user.login.uuid} data={user} />
      ))}
    </ScrollView>
  );
};

export default UserList;
