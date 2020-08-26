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
  {name: 'Download'},
];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
      </View>
    );
  }
}

export default List;
