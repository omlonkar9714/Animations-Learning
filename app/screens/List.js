import React, {Component} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';

const screens = [
  {name: 'Scale'},
  {name: 'TranslateY'},
  {name: 'ProgressBar'},
  {name: 'Loader'},
  {name: 'RadioButton'},
  {name: 'Waveheader'},
  {name: 'SvgHeader'},
  {name: 'SvgImg'},
  {name: 'CircularAnimationgImg'},
  {name: 'Download '},
  {name: 'AddToCart'},
  {name: 'Rounded'},
  {name: 'Rounded2'},
  {name: 'FastImage'},
];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginVertical: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ScrollView>
          {screens.map((item) => (
            <Pressable
              onPress={() => {
                this.props.navigation.navigate(item.name);
              }}>
              <View
                style={{
                  height: 50,
                  backgroundColor: 'black',
                  marginVertical: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 200,
                }}>
                <Text style={{color: 'white'}}>{item.name}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default List;
