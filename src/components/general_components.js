import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';
import {Field, ErrorMessage} from 'formik';

/////// APP LAYOUT ///////
export const AppView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
  border: 10px solid #70a9a1;
`;

export const Body = styled.View`
  top: -10%;
`;
export const FlexView = styled.View`
  flex: 1;
`;
export const AlignRow = styled.View`
  flex-direction: row;
`;
export const ViewPadding = styled.View`
  margin-left: ${props => props.marginleft || '0px'};
  margin-right: ${props => props.marginright || '0px'};
  flex-wrap: wrap;
`;

/////// TITLES ///////
export const Title = styled.Text`
  color: ${props => props.color || '#70a9a1'};
  font-family: ${props => props.font || 'PermanentMarker-Regular'};
  font-size: ${props => props.size || '30px'};
  text-align: center;
  margin: ${props => props.margin || '5%'};
  align-self: ${props => (props.absolute ? 'center' : 'auto')};
  position: ${props => (props.absolute ? 'absolute' : 'relative')};
  justify-content: center;
`;
/////// TEXT ///////

export const Paragraph = styled.Text`
  font-size: 20px;
  color: #70a9a1;
  text-align: ${props => (props.left ? 'left' : 'center')};
  font-family: Mali-Regular;
  flex-wrap: wrap;
`;
export const PargraphBold = styled(Paragraph)`
  font-family: Mali-Bold;
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
`;

/////// BUTTONS ///////
const StyledButton = styled.TouchableOpacity`
  margin: 10px;
  width: ${props => props.width || '100%'};
  height: 50px;
  background-color: ${props => (props.inverted ? '#70a9a1' : 'white')};
  border: 2px solid #70a9a1;
  align-self: center;
  justify-content: center;
  border-radius: 14px;
  elevation: ${props => (props.disabled ? '0' : '5')};
`;
const StyledButton_Text = styled.Text`
  color: ${props => (props.inverted ? 'white' : '#70a9a1')};
  font-size: 25px;
  font-family: Rajdhani-Regular;
  text-align: center;
`;

export const MainButton = props => {
  let numItems = props.numItems || 1;
  let width = props.width ? props.width / numItems - 10 + 'px' : '100%';
  return (
    <StyledButton
      onPress={props.onPress}
      width={width}
      disabled={props.disabled}
      inverted={props.inverted}>
      <StyledButton_Text inverted={props.inverted}>
        {props.text}
      </StyledButton_Text>
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

/////// ERROR MESSAGE ///////
const ErrorMSG_Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: red;
  width: 100%;
  text-align: center;
`;

export const ErrorMSG = props => {
  return (
    <ErrorMessage name={props.name}>
      {msg => <ErrorMSG_Text>{msg}</ErrorMSG_Text>}
    </ErrorMessage>
  );
};
