import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addGoal, deleteGoal} from '../reducers/goals/goals_actions';

import {NoGoals_Title} from '../components/profile_components';
import {Title, AppView, MainButton} from '../components/general_components';
import GoalItem from './GoalItem';
import AddGoal from './AddGoal';
import DeleteGoal from './DeleteGoal';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {visibleAdd: false, visibleDelete: false, goalToDelete: -1};
    this.changeVisibleAdd = this.changeVisibleAdd.bind(this);
    this.closeDeleteGoal = this.closeDeleteGoal.bind(this);
    this.onLongPress = this.onLongPress.bind(this);
    this.addGoal = this.addGoal.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
  }
  changeVisibleAdd() {
    this.setState({visibleAdd: !this.state.visibleAdd});
  }
  closeDeleteGoal() {
    this.setState({visibleDelete: !this.state.visibleDelete, goalToDelete: -1});
  }
  onLongPress(goal) {
    this.setState({
      visibleDelete: !this.state.visibleDelete,
      goalToDelete: goal,
    });
  }
  addGoal(goal) {
    this.props.addGoal(goal);
  }
  deleteGoal() {
    this.props.deleteGoal(this.state.goalToDelete);
  }
  render() {
    let goalsArray = this.props.goalsList;
    let goalsList;
    if (!this.props.isEmpty)
      goalsList = goalsArray.map((goal, index) => {
        return (
          <GoalItem
            goal={goal}
            key={index}
            index={index + 1}
            onLongPress={this.onLongPress}
          />
        );
      });
    else
      goalsList = (
        <View>
          <NoGoals_Title bold margin="1px">
            NO GOALS
          </NoGoals_Title>
          <NoGoals_Title margin="1px">
            Add some goals to begin your journey
          </NoGoals_Title>
        </View>
      );
    return (
      <AppView>
        <AddGoal
          visible={this.state.visibleAdd}
          onClose={this.changeVisibleAdd}
          addGoal={this.addGoal}
        />
        <DeleteGoal
          goal={goalsArray[this.state.goalToDelete - 1] || 'NO GOAL DETCTED'}
          visible={this.state.visibleDelete}
          onClose={this.closeDeleteGoal}
          onDelete={this.deleteGoal}
        />
        <MainButton
          text="Add New Goal"
          disabled={this.state.visibleAdd}
          width={250}
          onPress={this.changeVisibleAdd}
        />
        <ScrollView>
          <Title font="PermanentMarker-Regular" size="30px">
            Your Goals:
          </Title>
          {goalsList}
        </ScrollView>
      </AppView>
    );
  }
}

Profile.propTypes = {
  goalsList: PropTypes.array,
  isEmpty: PropTypes.bool,
  addGoal: PropTypes.func,
  deleteGoal: PropTypes.func,
};

Profile.defaultProps = {
  isEmpty: true,
};

const mapStateToProps = state => {
  return {
    goalsList: state.goalsList.goalsList,
    isEmpty: state.goalsList.isEmpty,
  };
};

export default connect(
  mapStateToProps,
  {addGoal, deleteGoal},
)(Profile);
