import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

class Detail extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{
            alignSelf: 'center',
            height: Dimensions.get('window').width,
            width: Dimensions.get('window').width,
            borderWidth: 1,
            resizeMode: 'contain'
          }}
          source={{uri: 'https://usercontent1.hubstatic.com/6965630.png'}}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 32,
            fontWeight: '900'
          }}
        >{this.props.navigation.state.params.title}</Text>
      </View>
    );
  }
}

export default Detail;
