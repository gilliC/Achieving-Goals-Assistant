import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createDrawerNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';

import store from './configureStore';
import AppNavigator from './src/AppNavigator';
import SideMenu from './src/SideMenu';

const Navigator = createDrawerNavigator(
  {
    Item1: {
      screen: AppNavigator,
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
  },
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Navigator />
      </Provider>
    );
  }
}
