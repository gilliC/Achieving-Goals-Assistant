import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const LinkView = styled.View`
  padding: 15px;
`;
const LinkeText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #70a9a1;
`;

export const Link = props => {
  let children;
  if (typeof props.children === 'object')
    throw 'Link can not show react elements or objects';
  return (
    <LinkView>
      <LinkeText>{props.children}</LinkeText>
    </LinkView>
  );
};
