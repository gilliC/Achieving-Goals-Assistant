import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation';
import Home from './Home';
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
