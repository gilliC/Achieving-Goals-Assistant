import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import {Link, Header, Fotter, Quote} from './components/sidemenu_components';
import {FlexView} from './components/general_components';

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const navigate = this.props.navigation.navigate;
    return (
      <FlexView>
        <Header />
        <ScrollView>
          <View>
            <Link
              name="graph"
              type="octicon"
              onPress={() => {
                navigate('Home');
              }}>
              Tracker
            </Link>
            <Link
              name="user"
              type="font-awesome"
              onPress={() => {
                navigate('Profile');
              }}>
              Profile
            </Link>
            <Link
              name="info"
              type="font-awesome"
              onPress={() => {
                navigate('Instructions');
              }}>
              Instructions
            </Link>
          </View>
        </ScrollView>
        <Fotter>
          <Quote>"Don't talk about your dreams, SHOW them"</Quote>
        </Fotter>
      </FlexView>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

export default SideMenu;
