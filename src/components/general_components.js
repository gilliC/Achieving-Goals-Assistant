import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';

/////// APP LAYOUT ///////
export const AppView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  border: 10px solid #70a9a1;
`;

export const Body = styled.View`
  top: -10%;
`;

export const AlignRow = styled.View`
  flex-direction: row;
  justify-content: center;
`;

/////// TITLES ///////
export const Title = styled.Text`
  color: ${props => props.color || '#70a9a1'};
  font-size: ${props => (props.large ? '100px' : '20px')};
  text-align: center;
  margin: ${props => props.margin || '5%'};
  align-self: ${props => (props.absolute ? 'center' : 'auto')};
  position: ${props => (props.absolute ? 'absolute' : 'relative')};
  justify-content: center;
`;
export const TitleSurrounded = styled(Title)`
  border: 1px solid #70a9a1;
  width: 300px;
  align-self: center;
`;

/////// BUTTONS ///////
const StyledButton = styled.TouchableOpacity`
  margin: 10px;
  width: ${props => props.width || '100%'};
  height: 50px;
  background-color: white;
  border: 2px solid #70a9a1;
  align-self: center;
  justify-content: center;
  border-radius: 14px;
  elevation: 5;
`;
const StyledButton_Text = styled.Text`
  color: #70a9a1;
  font-size: 25px;
  text-align: center;
`;

export const MainButton = props => {
  let numItems = props.numItems || 1;
  let width = props.width / numItems - 10 + 'px' || '100%';
  return (
    <StyledButton onPress={props.onPress} width={width}>
      <StyledButton_Text>{props.text}</StyledButton_Text>
    </StyledButton>
  );
};

/////// PROGRESS BAR ///////
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
        unfilledColor={'rgba(112,169,161,0.2)'}
        borderWidth={props.borderWidth}>
        {props.children}
      </Progress.Bar>
    </ProgressBar_View>
  );
};
