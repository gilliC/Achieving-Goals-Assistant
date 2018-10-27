import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {Title, Body, AppView} from '../components/general_components';
import GoalItem from './GoalItem';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let goals = this.props.goals.map((goal, index) => {
      return <GoalItem goal={goal} key={index} />;
    });
    console.log(goals);
    return (
      <AppView>
        <Title>Your Goals:</Title>
        {goals}
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
