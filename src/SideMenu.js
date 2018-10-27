import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import {Link, SideMenu_View} from './components/sidemenu_components';

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ScrollView>
          <SideMenu_View>
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
          </SideMenu_View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

export default SideMenu;
