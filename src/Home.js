import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {
  counterInitialize,
  counterIncrease,
  counterDecrease,
} from './reducers/counter_actions';
import * as Progress from 'react-native-progress';
import styled from 'styled-components/native';
import {
  Title,
  TitleSurrounded,
  Body,
  MainButton,
  ProgressBar,
  AlignRow,
  AppView,
} from './components/general_components';

const progressBarWidth = 300;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {count: this.props.count, goals: this.props.goals};
    this.onPressIncrease = this.onPressIncrease.bind(this);
    this.onPressDecrease = this.onPressDecrease.bind(this);
    this.props.counterInitialize();
  }
  componentWillReceiveProps(nextProps) {
    let count = nextProps.count;
    this.setState({count});
    console.log(count);
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

  onPressIncrease() {
    this.props.counterIncrease();
  }
  onPressDecrease() {
    this.props.counterDecrease();
  }

  render() {
    let goal = 100;
    let progress = this.state.count / goal;
    return (
      <AppView center>
        <Body>
          <Title>{this.state.goals}</Title>
          <Title large>{parseInt(progress * 100)} %</Title>
          <ProgressBar
            progress={progress}
            height={50}
            borderRadius={0}
            width={progressBarWidth}
            borderWidth={2}>
            <Title absolute>
              {this.state.count}/ {goal} pt
            </Title>
          </ProgressBar>
          <AlignRow>
            <MainButton
              onPress={this.onPressIncrease}
              text="+"
              width={progressBarWidth}
              numItems={2}
            />
            <MainButton
              text="-"
              onPress={this.onPressDecrease}
              width={progressBarWidth}
              numItems={2}
            />
          </AlignRow>
        </Body>
      </AppView>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count.count,
    goals: state.goals.goals,
  };
};

export default connect(
  mapStateToProps,
  {counterInitialize, counterIncrease, counterDecrease},
)(Home);
