/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';

import store from './configureStore';
import Home from './src/Home';
export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <View>
          <Text>WELCOME TO ACHIVING GOALS</Text>
          <Home />
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
