import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import PushNotification from 'react-native-push-notification';

import {LocalNotification} from './LocalPushController';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Omkar',
    };
  }

  notificationHandler = () => {
    let title = 'Dynamic title';
    LocalNotification(title);
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View
          style={{
            height: '50%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            title="Trigger Instant Notification"
            color="black"
            onPress={this.notificationHandler.bind(this)}></Button>
        </View>
        <View
          style={{
            height: '50%',
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
      </View>
    );
  }
}

export default Test;
