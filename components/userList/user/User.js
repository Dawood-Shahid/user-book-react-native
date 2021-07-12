import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {Avatar, NativeBaseProvider} from 'native-base';
import styles from '../styles';
import {showDetails} from '../../../store/actions/Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const User = ({data, showDetails}) => {
  return (
    <TouchableOpacity onPress={() => showDetails(data)}>
      <View style={styles.userBody}>
        <View>
          <NativeBaseProvider>
            <Avatar
              size="lg"
              source={{
                uri: `${data.picture.medium}`,
              }}
            />
          </NativeBaseProvider>
        </View>
        <View style={styles.userText}>
          <Text
            style={
              styles.userTitle
            }>{`${data.name.first} ${data.name.last}`}</Text>
          <Text style={styles.userDesc}>{data.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // hideDetails,
      showDetails,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(User);
