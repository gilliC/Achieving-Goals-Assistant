import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import Modal from 'react-native-modal';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import GoalItem from './GoalItem';
import {Title, MainButton, ErrorMSG} from '../components/general_components';
import {
  Profile_Title,
  AddGoal_View,
  AddGoal_Input,
} from '../components/profile_components';

export default class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }
  componentDidUpdate(props) {
    if (this.props.visible !== this.state.visible)
      this.setState({visible: this.props.visible});
  }
  render() {
    return (
      <Modal
        isVisible={this.state.visible}
        duration={500}
        onBackdropPress={this.props.onClose}
        onBackButtonPress={this.props.onClose}>
        <Formik
          initialValues={{goal: ''}}
          validate={values => {
            let errors = {};
            if (!values.goal) {
              errors.goal = 'Please enter a goal ';
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            this.props.addGoal(values.goal);
            this.props.onClose();
            error => {
              actions.setSubmitting(false);
              actions.setErrors(error);
              actions.setStatus({msg: 'Set some arbitrary status or data'});
            };
          }}>
          {formikProps => (
            <AddGoal_View>
              <Title margin="2px">Add A Goal</Title>
              <Field
                name="goal"
                component={AddGoal_Input}
                onChangeText={formikProps.handleChange('goal')}
                multiline={true}
                placeholder="Enter a goal: Quit Smoking"
                placeholderTextColor="#70a9a1"
              />
              <ErrorMSG name="goal" />
              <MainButton
                text="Add"
                width={250}
                onPress={formikProps.handleSubmit}
              />
            </AddGoal_View>
          )}
        </Formik>
      </Modal>
    );
  }
}
