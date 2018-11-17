import React from 'react';
import {TextInput, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';

import {Title} from './general_components';
import {Formik, Field, ErrorMessage} from 'formik';

/////// GOAL ITEM //////
export const GoalItem_Text = styled(Title)`
  font-family: ShadowsIntoLight;
`;

/////// ADD GOAL //////
export const AddGoal_View = styled.KeyboardAvoidingView`
  background-color: white;
  height: 100%;
  justify-content: center;
`;

export const AddGoal_Input = styled.TextInput`
  width: 80%;
  color: #70a9a1;
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
