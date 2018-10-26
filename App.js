import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {DrawerNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';

import store from './configureStore';
import Home from './src/Home';
import SideMenu from './src/SideMenu';

const Navigator = DrawerNavigator(
  {
    Item1: {
      screen: Home,
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
