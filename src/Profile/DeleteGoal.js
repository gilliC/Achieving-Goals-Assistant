import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import Modal from 'react-native-modal';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import GoalItem from './GoalItem';
import {Title, MainButton, AlignRow} from '../components/general_components';
import {Quote} from '../components/sidemenu_components';
import {
  Profile_Title,
  AddGoal_View,
  AddGoal_Input,
} from '../components/profile_components';

export default class DeleteGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidUpdate(props) {
    if (this.props.visible !== this.state.visible)
      this.setState({visible: this.props.visible});
  }
  onDelete() {
    this.props.onDelete();
    this.props.onClose();
  }
  render() {
    return (
      <Modal
        isVisible={this.state.visible}
        duration={500}
        onBackdropPress={this.props.onClose}
        onBackButtonPress={this.props.onClose}>
        <AddGoal_View>
          <Quote>{this.props.goal}</Quote>
          <AlignRow>
            <MainButton
              inverted
              text="Delete"
              width={250}
              numItems={2}
              onPress={this.onDelete}
            />
            <MainButton
              inverted
              text="Cancel"
              width={250}
              numItems={2}
              onPress={this.props.onClose}
            />
          </AlignRow>
        </AddGoal_View>
      </Modal>
    );
  }
}
