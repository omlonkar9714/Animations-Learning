import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Cola from '../assets/images/cola';
import Planet from '../assets/images/planet';

class SvgImg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            margin: 10,
          }}>
          <Cola color="green" height="120" width="120"></Cola>
          <Cola color="red" height="150" width="150"></Cola>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Cola color="grey" height="70" width="70"></Cola>
          <Cola color="brown" height="90" width="90"></Cola>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Planet hasRing upperHalfColor="red" lowerHalfColor="red"></Planet>
          <Planet patch1Color="black" lowerHalfColor="red"></Planet>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Planet patch1Color="brown"> </Planet>
          <Planet hasRing ringColor="green" height="200" width="200"></Planet>
        </View>
      </View>
    );
  }
}

export default SvgImg;
