import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {Title} from '../components/general_components';
import {GoalItem_View, GoalItem_Text} from '../components/profile_components';

export default class GoalItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.goal);
    return (
      <GoalItem_View>
        <GoalItem_Text>{this.props.goal}</GoalItem_Text>
      </GoalItem_View>
    );
  }
}
