import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './homeScreen';
import DeleteUserScreen from './deleteUserScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fafafa',
  },
};

const UserBook = ({usersData, deletedUsers}) => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {},
        })}
        tabBarOptions={{
          activeBackgroundColor: '#1769aa',
          inactiveBackgroundColor: '#e0e0e0',
          activeTintColor: '#e0e0e0',
          inactiveTintColor: '#1769aa',
          tabStyle: {
            justifyContent: 'center',
          },
          labelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            // borderWidth: 1,
          },
          labelPosition: 'beside-icon',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarBadge: `${usersData.length}`}}
        />
        <Tab.Screen
          name="Delete"
          component={DeleteUserScreen}
          options={{tabBarBadge: `${deletedUsers.length}`}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    usersData: state.root.usersData,
    deletedUsers: state.root.deletedUsers,
  };
};

export default connect(mapStateToProps)(UserBook);
