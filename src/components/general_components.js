import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';

export const Title = styled.Text`
  color: #70a9a1;
  font-size: 25px;
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

export const Body = styled.View`
  justify-content: center;
`;

const StyledButton = styled.TouchableOpacity`
  margin: 10px;
  width: 20%;
  height: 50px;
  background-color: #70a9a1;
  align-self: center;
  justify-content: center;
  border-radius: 14px;
  elevation: 1;
`;
const StyledButton_Text = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
`;
const ProgressBar_View = styled.View`
  align-self: center;
`;
export const ProgressBar = props => {
  return (
    <ProgressBar_View>
      <Progress.Bar
        progress={props.progress}
        height={props.height}
        borderRadius={props.borderRadius}
        width={props.width}
        color={'rgba(112,169,161,0.7)'}
        borderColor={'rgba(112,169,161,1)'}
      />
    </ProgressBar_View>
  );
};

export const MainButton = props => {
  return (
    <StyledButton onPress={props.onPress}>
      <StyledButton_Text>{props.text}</StyledButton_Text>
    </StyledButton>
  );
};
