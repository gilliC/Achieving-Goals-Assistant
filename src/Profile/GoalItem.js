import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {Title} from '../components/general_components';
import {GoalItem_Text} from '../components/profile_components';

export default class GoalItem extends Component {
  constructor(props) {
    super(props);
    this.onLongPress = this.onLongPress.bind(this);
  }

  onLongPress() {
    this.props.onLongPress(this.props.index);
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onLongPress}>
        <GoalItem_Text>
          {this.props.index}. {this.props.goal}
        </GoalItem_Text>
      </TouchableWithoutFeedback>
    );
  }
}
