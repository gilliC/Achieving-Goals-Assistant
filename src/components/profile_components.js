import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import styled from 'styled-components/native';

import {Title, StyledButton} from './general_components';

/////// PROFILE ///////
export const Profile_Title = styled(Title)`
  font-size: 30px;
  font-family: PermanentMarker-Regular;
`;
/////// GOAL ITEM //////
export const GoalItem_Text = styled(Title)`
  font-family: ShadowsIntoLight;
`;

/////// ADD GOAL //////

export const AddGoal_View = styled.KeyboardAvoidingView`
  width: 95%;
  margin: 5px;
  min-height: 160px;
  height: 35%;
  background-color: white;
  border: 1px solid #70a9a1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;

export const AddGoal_Input = styled.TextInput`
  width: 75%;
  border-bottom-color: #70a9a1;
  border-bottom-width: 2px;
  align-self: center;
  justify-content: center;
`;

/////// GOALS LIST //////

export const NoGoals_Title = styled(Title)`
  font-family: ${props => (props.bold ? 'Mali-Bold' : 'Mali-Regular')};
  font-size: ${props => (props.bold ? '40px' : '20px')};
`;
