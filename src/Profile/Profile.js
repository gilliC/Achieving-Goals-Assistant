import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {Profile_Title} from '../components/profile_components';
import {
  Title,
  Body,
  AppView,
  MainButton,
} from '../components/general_components';
import GoalItem from './GoalItem';
import AddGoal from './AddGoal';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.changeVisible = this.changeVisible.bind(this);
  }
  changeVisible() {
    console.log('change visible');
    this.setState({visible: !this.state.visible});
  }

  render() {
    let goals = this.props.goals.map((goal, index) => {
      return <GoalItem goal={goal} key={index} index={index + 1} />;
    });

    return (
      <AppView>
        <AddGoal visible={this.state.visible} onClose={this.changeVisible} />
        <MainButton
          text={this.state.visible ? 'Cancel' : 'Add New Goal'}
          width={250}
          onPress={this.changeVisible}
        />
        <ScrollView>
          <Profile_Title>Your Goals:</Profile_Title>
          {goals}
        </ScrollView>
      </AppView>
    );
  }
}

const mapStateToProps = state => {
  return {
    goals: state.goals.goals,
  };
};

export default connect(
  mapStateToProps,
  {},
)(Profile);
