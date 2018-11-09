import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TouchableWithoutFeedback} from 'react-native';

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
    const {index, goal} = this.props;
    return (
      <TouchableWithoutFeedback onLongPress={this.onLongPress}>
        <GoalItem_Text>
          {index}. {goal}
        </GoalItem_Text>
      </TouchableWithoutFeedback>
    );
  }
}

GoalItem.defaultProps = {
  index: 0,
  goal: "There's an error",
};

GoalItem.propTypes = {
  index: PropTypes.number,
  goal: PropTypes.string,
  onLongPress: PropTypes.func,
};
