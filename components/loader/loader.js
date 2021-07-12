import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import styles from './styles';

const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loader;
