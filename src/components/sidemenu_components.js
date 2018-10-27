import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Icon} from 'react-native-elements';

export const SideMenu_View = styled.View`
  flex: 1;
  padding-top: 10%;
`;
const LinkView = styled.View`
  padding: 15px;
  flex-direction: row;
`;

const LinkButton = styled.TouchableOpacity``;
const LinkText = styled.Text`
  font-size: 20px;
  color: #70a9a1;
  font-weight: bold;
  width: 75%;
  margin-left: 10px;
  text-align: center;
`;
const LinkIcon = styled(Icon)`
  margin-left: 3px;
  margin-right: 10px;
  width: 25%;
`;

export const Link = props => {
  let children;
  if (typeof props.children === 'object')
    throw 'Link can not show react elements or objects';
  return (
    <View>
      <LinkButton onPress={props.onPress}>
        <LinkView>
          <LinkIcon
            name={props.name}
            type={props.type}
            color="#70a9a1"
            size={20}
          />
          <LinkText>{props.children}</LinkText>
        </LinkView>
      </LinkButton>
    </View>
  );
};
