import React from 'react';
import {Button, Text, View} from 'react-native';
import {Avatar, NativeBaseProvider} from 'native-base';

import styles from '../styles';

const UserDetails = ({hide, data, handler}) => {
  // console.log(data.login.uuid);
  const userActionHandler = () => {
    if (data.deleteFlag) {
      // for recover
      // hide();
      handler(data);
    } else {
      // for delete
      handler(data);
      // hide();
    }
  };
  return (
    <View style={styles.detailsSection}>
      <Text style={styles.userDetailsHeading}>User Details</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.userImg}>
          <NativeBaseProvider>
            <Avatar
              size="xl"
              source={{
                uri: `${data.picture.large}`,
              }}
            />
          </NativeBaseProvider>
        </View>
        <Text style={styles.detailsText}>
          Name: {`${data.name.title}. ${data.name.first} ${data.name.last}`}
        </Text>
        <Text style={styles.detailsText}>Email: {data.email}</Text>
        <Text style={styles.detailsText}>Gender: {data.gender}</Text>
        <Text style={styles.detailsText}>Age: {data.dob.age}</Text>
        <Text style={styles.detailsText}>
          Contact: {`${data.cell}, ${data.phone}`}
        </Text>
        <Text style={styles.detailsText}>
          Date of birth: {data.dob.date.slice(0, 10)}
        </Text>
        <Text style={styles.detailsText}>
          Address:{' '}
          {`House no. ${data.location.street.number}, ${data.location.street.name}, ${data.location.city}, ${data.location.state}, ${data.location.country}`}
        </Text>
        <Text style={styles.detailsText}>
          Postcode: {data.location.postcode}
        </Text>
      </View>
      <View style={styles.btnGroup}>
        <View style={styles.btnStyle}>
          <Button title="Back" onPress={hide} />
        </View>
        <View style={styles.btnStyle}>
          <Button
            title={data.deleteFlag ? 'Recover user' : 'Delete user'}
            color={data.deleteFlag ? '#1769aa' : '#ef5350'}
            onPress={userActionHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default UserDetails;
