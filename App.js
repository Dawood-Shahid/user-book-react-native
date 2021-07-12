import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';

import UserBook from './components/UserBook';
import store from './store';

const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>USER BOOK</Text>
        </View>
        <UserBook />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#1769aa',
    height: '100%',
  },
  title: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
