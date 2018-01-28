import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

class Detail extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{uri: 'https://i.pinimg.com/736x/b7/6c/ae/b76caeef63f1203ee69a67dfb81c741a--iphone-wallpaper-iphone-.jpg'}}
        />
        <Text>{this.props.navigation.state.params.title}</Text>
      </View>
    );
  }
}

export default Detail;
