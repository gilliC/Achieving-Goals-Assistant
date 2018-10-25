import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {counterInitialize, counterIncrease} from './reducers/counter_actions';
import * as Progress from 'react-native-progress';
import styled from 'styled-components/native';
import {Title} from './components/general_components';

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
    console.log('clicked');
    this.props.counterIncrease();
  }

  render() {
    let progress = this.state.count / 100;
    return (
      <View>
        <Progress.Bar progress={0.3} width={2000} />
        <Progress.Circle
          progress={progress}
          size={150}
          thickness={10}
          showsText={true}
          indeterminate={false}
          formatText={this.formatText}
        />
        <Progress.Pie progress={0.4} size={50} />
        <Button onPress={this.onPress} title="Press Me" />
        <Title>{this.state.count}</Title>
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
