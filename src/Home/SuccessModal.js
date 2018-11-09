import React, {Component} from 'react';
import Confetti from 'react-native-confetti';
import PropTypes from 'prop-types';

import {MainModal, Title} from '../components/general_components';

export default class SuccessModal extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.onClose = this.onClose.bind(this);
    this.setNode = this.setNode.bind(this);
  }
  componentDidUpdate(props) {
    const {visible} = this.props;
    if (visible !== this.state.visible) {
      this.setState({visible});
    }
  }

  setNode(node) {
    this._confettiView = node;
    if (this._confettiView) this._confettiView.startConfetti();
  }
  onClose() {
    if (this._confettiView) this._confettiView.stopConfetti();
    this.props.onClose();
  }
  render() {
    return (
      <MainModal
        modalConfig={{
          duration: 500,
          isVisible: this.state.visible,
          onBackdropPress: this.onClose,
          onBackButtonPress: this.onClose,
          animationOut: 'slideOutUp',
          animationOutTiming: 500,
        }}
        containerConfig={{
          width: '95%',
          height: '70%',
          borderWidth: '3px',
        }}>
        <Confetti
          ref={this.setNode}
          duration={3000}
          untilStopped={true}
          timeout={0}
        />
        <Title size="20px">YOU HAVE REACHED YOUR GOAL!</Title>
        <Title size="50px">{this.props.goal} Points</Title>
        <Title size="20px">is your new goal</Title>
      </MainModal>
    );
  }
}

SuccessModal.defaultProps = {
  visible: false,
};

SuccessModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  goal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
