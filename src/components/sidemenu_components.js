import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Icon} from 'react-native-elements';

import {Title} from './general_components';

export const Fotter = styled.View`
  padding: 15px;
  position: absolute;
  bottom: 0;
`;

////////// HEADER ///////////
const Header_View = styled.View`
  top: 0;
  background-color: #70a9a1;
  height: 15%;
`;
const Header_Icon = styled(Icon)`
  margin-left: 3px;
  margin-right: 10px;
  width: 25%;
`;
const Header_Title = styled(Title)`
  color: white;
  font-family: ShadowsIntoLight;
  font-size: 35px;
`;

export const Header = props => {
  return (
    <Header_View>
      <Header_Title>Goals Tracker</Header_Title>
    </Header_View>
  );
};

////////// LINK ///////////
const LinkView = styled.View`
  padding: 15px;
  flex-direction: row;
`;

const LinkText = styled.Text`
  font-size: 20px;
  font-family: Rajdhani-Bold;
  color: #70a9a1;
  width: 75%;
  margin-left: 10px;
  text-align: center;
`;
export const LinkIcon = styled(Icon)`
  width: 25%;
`;

export const Link = props => {
  let children;
  if (typeof props.children === 'object')
    throw 'Link can not show react elements or objects';
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <LinkView>
          <LinkIcon
            name={props.name}
            type={props.type}
            color="#70a9a1"
            size={props.large ? 30 : 20}
          />
          <LinkText>{props.children}</LinkText>
        </LinkView>
      </TouchableOpacity>
    </View>
  );
};
////////// Quote ///////////

export const Quote = styled(Title)`
  font-size: 25px;
  font-family: ShadowsIntoLight;
`;
