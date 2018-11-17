import React, {Component} from 'react';
import PropTypes from 'prop-types';

import GoalItem from './GoalItem';
import {
  Title,
  MainButton,
  AlignRow,
  MainModal,
} from '../components/general_components';

export default class DeleteGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidUpdate(props) {
    const {visible} = this.props;
    if (visible !== this.state.visible) this.setState({visible});
  }
  onDelete() {
    this.props.onDelete();
    this.props.onClose();
  }
  render() {
    return (
      <MainModal
        modalConfig={{
          isVisible: this.state.visible,
          duration: 500,
          onBackButtonPress: this.props.onClose,
        }}
        containerConfig={{
          height: '55%',
          borderWidth: '3px',
        }}>
        <Title size="20px" font="ShadowsIntoLight">
          Do you want to delete:
        </Title>
        <Title size="40px" font="ShadowsIntoLight">
          {this.props.goal}
        </Title>
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
      </MainModal>
    );
  }
}

DeleteGoal.defaultProps = {
  visible: false,
};

DeleteGoal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  goal: PropTypes.string,
};
