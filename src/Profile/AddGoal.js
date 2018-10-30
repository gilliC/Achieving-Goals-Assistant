import React, {Component} from 'react';
import {Text, View, Modal} from 'react-native';
import {AnimatedModal} from 'react-native-modal-animated';
import GoalItem from './GoalItem';
import {Title, MainButton} from '../components/general_components';
import {
  Profile_Title,
  AddGoal_View,
  AddGoal_Input,
} from '../components/profile_components';

export default class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidUpdate(props) {
    if (this.props.visible !== this.state.visible)
      this.setState({visible: this.props.visible});
  }
  render() {
    return (
      <AnimatedModal
        duration={1000}
        transparent={false}
        visible={this.state.visible}
        onBackdropPress={this.props.onClose}>
        <AddGoal_View>
          <Title>Add A Goal</Title>
          <AddGoal_Input />
          <MainButton text="Add" width={150} />
        </AddGoal_View>
      </AnimatedModal>
    );
  }
}
