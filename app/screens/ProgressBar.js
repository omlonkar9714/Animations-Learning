import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  ToastAndroid,
} from 'react-native';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDownload: false,
      width: new Animated.Value(0),
      progressStatus: 0,
      paused: false,
    };
  }
  componentDidMount() {
    console.disableYellowBox = true;
  }

  startDownload = () => {
    this.setState({paused: false});
    this.state.width.addListener(({value}) => {
      this.setState({progressStatus: parseInt(value, 10)});
    });
    Animated.timing(this.state.width, {
      toValue: 100,
      duration: 1000,
    }).start(() => {
      // ToastAndroid.show('Download complete', ToastAndroid.SHORT);
    });
  };
  resetDownload = () => {
    this.state.width.addListener(({value}) => {
      this.setState({progressStatus: parseInt(value, 10)});
    });
    Animated.timing(this.state.width, {
      toValue: 0,
      duration: 0,
    }).start(() => {
      // ToastAndroid.show('Download complete', ToastAndroid.SHORT);
    });
  };

  pauseAnimation = () => {
    this.setState({paused: true});
    Animated.timing(this.state.width).stop();
  };

  render() {
    const backgroundColorInterpolation = this.state.width.interpolate({
      inputRange: [0, 50, 100],
      outputRange: ['yellow', 'orange', 'red'],
    });

    const animatedWidth = {
      width: this.state.progressStatus + '%',
      backgroundColor: backgroundColorInterpolation,
      // this.state.progressStatus > 70
      //   ? 'green'
      //   : this.state.progressStatus > 30
      //   ? 'orange'
      //   : 'red',
    };

    return (
      <View style={styles.container}>
        <View style={styles.downdloadBar}>
          <Animated.View
            style={[styles.progress, animatedWidth]}></Animated.View>
          <Animated.Text
            style={[
              styles.label,
              {
                color:
                  this.state.progressStatus > 40
                    ? 'black'
                    : this.state.progressStatus > 60
                    ? 'white'
                    : 'white',
              },
            ]}>
            {this.state.progressStatus}%
          </Animated.Text>
        </View>

        <Pressable
          onPress={() => {
            if (this.state.progressStatus == 0 || this.state.paused == true) {
              this.startDownload();
            } else if (this.state.progressStatus == 100) {
              this.resetDownload();
            } else {
              this.pauseAnimation();
            }
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {this.state.progressStatus == 0 && this.state.paused == false
                ? 'Download'
                : this.state.progressStatus == 100
                ? 'Reset'
                : this.state.progressStatus != 0 && this.state.paused == true
                ? 'Resume'
                : 'Pause'}
            </Text>
          </View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  downdloadBar: {
    justifyContent: 'center',
    height: 90,
    padding: 2,
    borderRadius: 10,
    backgroundColor: 'black',
    width: '100%',
  },
  label: {
    fontSize: 30,
    color: 'red',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
  progress: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  button: {
    height: 70,
    width: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 100,
  },
  buttonText: {fontSize: 25, color: 'white'},
});

export default ProgressBar;
