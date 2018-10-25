/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './coyynfigureStore';

import Home from './src/Home';
export default class App extends Component {
  render() {
    return (
      <View>
        <Text>WELCOME TO ACHIVING GOALS</Text>
        <Home />
      </View>
    );
  }
}
