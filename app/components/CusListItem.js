import React from 'react';
import { ListItem, Left, Body, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CusListItem = ({ iconName, text, community, onPress }) => (
  <ListItem
    icon
    style={{ marginTop: 21 }}
    onPress={onPress}
  >
    <Left>
      {community ?
        <MCIcon icon style={{ marginBottom: 21 }} name={iconName} color="teal" size={24} /> :
        <Icon icon style={{ marginBottom: 21 }} name={iconName} color="teal" size={24} />
      }
    </Left>
    <Body>
      <Text style={{ marginBottom: 21 }}>{text}</Text>
    </Body>
  </ListItem>
);

export default CusListItem;
