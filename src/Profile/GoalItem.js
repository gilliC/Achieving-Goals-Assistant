import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {Title} from '../components/general_components';
import {GoalItem_Text} from '../components/profile_components';

export default class GoalItem extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <GoalItem_Text>
          {this.props.index}. {this.props.goal}
        </GoalItem_Text>
      </View>
    );
  }
}
