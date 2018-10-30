import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components/native';

import {Title} from './general_components';

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

export const AddGoal_View = styled.View`
  width: 65%;
  height: 65%;
  background-color: white;
  border: 1px solid #70a9a1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddGoal_Input = styled.TextInput`
  border-bottom-color: #70a9a1;
  border-bottom-width: 2px;
  width: 75%;
  text-align: center;
`;
