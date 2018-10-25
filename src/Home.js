import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {counterInitialize, counterIncrease} from './reducers/counter_actions';
import * as Progress from 'react-native-progress';
import styled from 'styled-components/native';
import {
  Title,
  Body,
  MainButton,
  ProgressBar,
} from './components/general_components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {count: this.props.count};
    this.onPress = this.onPress.bind(this);
    this.props.counterInitialize();
  }
  componentWillReceiveProps(nextProps) {
    let count = nextProps.count;
    this.setState({count});
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      console.table({now: this.props, next: nextProps});
      return true;
    }
    return false;
  }
  formatText(progress) {
    progress = parseInt(progress * 100);
    return '' + progress + ' %';
  }

  onPress() {
    this.props.counterIncrease();
  }

  render() {
    let goal = 100;
    let progress = this.state.count / goal;
    return (
      <View>
        <Title>Goal: {goal}</Title>
        <Title>{progress * 100} %</Title>
        <Body>
          <ProgressBar
            progress={progress}
            height={50}
            borderRadius={0}
            width={300}
          />
          <MainButton onPress={this.onPress} text="+" />
          <Title>{this.state.count}</Title>
        </Body>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count.count,
  };
};

export default connect(
  mapStateToProps,
  {counterInitialize, counterIncrease},
)(Home);
