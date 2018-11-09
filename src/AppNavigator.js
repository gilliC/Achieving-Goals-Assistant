import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import Home from './Home/Home';
import Instructions from './Instructions';
import Profile from './Profile/Profile';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({}),
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({navigation}) => ({}),
    },
    Instructions: {
      screen: Instructions,
      navigationOptions: ({navigation}) => ({}),
    },
  },
  {headerMode: 'none'},
);

export default AppNavigator;
