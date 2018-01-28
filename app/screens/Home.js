import React, { Component } from 'react';
import {
  Container,
  Header,
  Body,
  Content,
  Text,
  Title,
  Left,
  Right,
  Card,
  CardItem,
  List,
  Switch
} from 'native-base';

import CusCard from '../components/CusCard';
import CusListItem from '../components/CusListItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

import data from '../utils/list.json';

class Home extends Component {
  state = { loaded: false, data: [] };

  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerRight: <Icon name="search" color="#fff" style={{ paddingRight: 10 }} size={24} />
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ loaded: true, data });
  }

  renderCusCardItem = (item) => {
    return item.list.map(subitem =>
      <CusListItem
        key={subitem.iconName}
        iconName={subitem.iconName}
        text={subitem.text}
        community={subitem.community}
        onPress={() => this.props.navigation.navigate('Detail', { title: subitem.text })}
      />
    );
  }

  renderCustCard = () => {
    return this.state.data.map(item =>
      <CusCard key={item.id} title={item.title}>
        {this.renderCusCardItem(item)}
      </CusCard>
    );
  }

  render() {
    if (!this.state.loaded) {
      return <Expo.AppLoading />
    } else {
      return (
        <Container>
          <Content>
            {this.renderCustCard()}
          </Content>
        </Container>
      );
    }
  }
}

export default Home;
