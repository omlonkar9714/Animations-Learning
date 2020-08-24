import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

class Waveheader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}></StatusBar>
        {/* <Svg
          style={{marginTop: -10}}
          height="100"
          width="100%"
          viewBox="0 0 1440 320">
          <Path
            fill="#E7008A"
            fill-opacity="1"
            d="M0,192L24,160C48,128,96,64,144,53.3C192,43,240,85,288,133.3C336,181,384,235,432,240C480,245,528,203,576,165.3C624,128,672,96,720,96C768,96,816,128,864,154.7C912,181,960,203,1008,218.7C1056,235,1104,245,1152,218.7C1200,192,1248,128,1296,106.7C1344,85,1392,107,1416,117.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></Path>
        </Svg> */}
        <View
          style={{
            marginTop: -10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 90,
            width: '100%',
            backgroundColor: '#E7008A',
          }}>
          <Text style={{color: 'white', fontSize: 30}}>Home</Text>
        </View>
        <Svg
          style={{marginTop: -10}}
          height="100"
          width="100%"
          viewBox="0 0 1440 320">
          <Path
            fill="#E7008A"
            fill-opacity="1"
            d="M0,192L24,160C48,128,96,64,144,53.3C192,43,240,85,288,133.3C336,181,384,235,432,240C480,245,528,203,576,165.3C624,128,672,96,720,96C768,96,816,128,864,154.7C912,181,960,203,1008,218.7C1056,235,1104,245,1152,218.7C1200,192,1248,128,1296,106.7C1344,85,1392,107,1416,117.3L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></Path>
          {/* // d="M0,160L80,133.3C160,107,320,53,480,69.3C640,85,800,171,960,192C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></Path> */}
        </Svg>
        <View style={styles.container}>
          <Text>Cola Here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Waveheader;
